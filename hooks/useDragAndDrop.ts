import { useEffect, useState } from 'react';

type Pos = {
	x: number;
	y: number;
};

type UseDragAndDropProps = {
	element: string | undefined;
	initialPosition: Pos;
	pageIndex: number;
};

export const useDragAndDrop = ({ element, initialPosition, pageIndex }: UseDragAndDropProps) => {
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState<Pos>(initialPosition);
	const [rel, setRel] = useState<any>(); // position relative to the cursor

	const stopPropagationHandler = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};

	const onMouseDownDrag = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.button !== 0) return;
		const target = e.target as HTMLElement;
		console.log(pageIndex);

		// Check if the target has the 'element' class
		const draggableElement = target.closest(`.${element}`);
		if (!draggableElement) return;

		const box = target.getBoundingClientRect();
		setDragging(true);
		setRel({
			x: e.clientX - box.left,
			y: e.clientY - box.top
		});
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

		// Get the size of the draggable element
		const draggableElement = document.querySelector(`.${element}`);
		const elementWidth = draggableElement ? draggableElement.getBoundingClientRect().width : 0;
		const elementHeight = draggableElement ? draggableElement.getBoundingClientRect().height : 0;

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

// console.log(newPosition)

// newPosition.x = Math.max(0, Math.min(newPosition.x, window.window.innerWidth - 100));
// newPosition.y = Math.max(0, Math.min(newPosition.y, window.innerHeight - 100));
