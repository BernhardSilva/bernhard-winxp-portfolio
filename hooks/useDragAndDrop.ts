import { useEffect, useState } from 'react';

type Pos = {
	x: number;
	y: number;
};

type UseDragAndDropProps = {
	element: string | undefined;
	initialPosition: Pos;
	index: number;
};

export const useDragAndDrop = ({ element, initialPosition, index }: UseDragAndDropProps) => {
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState<Pos>(initialPosition);
	const [rel, setRel] = useState<any>(); // position relative to the cursor
	const [clickCount, setClickCount] = useState(0);
	let singleClickTimer: ReturnType<typeof setTimeout>;

	const stopPropagationHandler = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};

	const onMouseDownDrag = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.button !== 0) return;
		const target = e.target as HTMLElement;

		// Check if the target has the 'element' class
		const draggableElement = target.closest(`.${element}`);
		if (!draggableElement) return;

		const box = target.getBoundingClientRect();
		setDragging(true);
		setRel({
			x: e.clientX - box.left,
			y: e.clientY - box.top
		});

		// Handle single/double click and dragging
		setClickCount((prev) => prev + 1);
		if (clickCount === 1) {
			// Single click
			singleClickTimer = setTimeout(() => {
				setClickCount(0);
			}, 50);
		} else if (clickCount >= 2) {
			// Double click
			clearTimeout(singleClickTimer);
			setClickCount(0);
		}

		stopPropagationHandler(e);
	};

	const onMouseUp = (e: MouseEvent) => {
		setDragging(false);
		stopPropagationHandler(e);
	};

	const onMouseMove = (e: MouseEvent) => {
		if (!dragging) return;

		let newPosition = {
			x: e.clientX - rel.x,
			y: e.clientY - rel.y
		};
		console.log('🚀 ~ file: useDragAndDrop.ts:70 ~ onMouseMove ~ newPosition:', newPosition);

		// Get the size of the draggable element
		// const draggableElement = document.querySelector(`.${element}`);
		// const elementWidth = draggableElement ? draggableElement.getBoundingClientRect().width : 0;
		// const elementHeight = draggableElement ? draggableElement.getBoundingClientRect().height : 0;

		// Ensure the element stays within the screen bounds
		newPosition.x = Math.max(0, Math.min(newPosition.x, window.innerWidth - 100));
		newPosition.y = Math.max(0, Math.min(newPosition.y, window.innerHeight - 100));

		setPosition(newPosition);
		stopPropagationHandler(e);
	};

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};
	});
	return { onMouseDownDrag, position, dragging };
};
