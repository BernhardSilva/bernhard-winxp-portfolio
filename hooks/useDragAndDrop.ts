import { useEffect, useState } from 'react';

type Pos = {
	x: number;
	y: number;
};

type UseDragAndDropProps = {
	element: string | undefined;
	initialPosition: Pos;
	elementRef: React.RefObject<HTMLDivElement> | null;
};

export const useDragAndDrop = ({ element, initialPosition, elementRef }: UseDragAndDropProps) => {
	const [dragging, setDragging] = useState(false);
	const [draggingOut, setDraggingOut] = useState(false);
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

		const elementWidth = elementRef?.current?.offsetWidth;
		console.log('🚀 ~ file: useDragAndDrop.ts:83 ~ onMouseMove ~ elementWidth:', elementWidth);
		const elementHeight = elementRef?.current?.offsetHeight;
		console.log('🚀 ~ file: useDragAndDrop.ts:85 ~ onMouseMove ~ elementHeight:', elementHeight);

		if (elementWidth && elementHeight) {
			console.log('drag ref here');
			newPosition.x = Math.max(0, Math.min(newPosition.x, window.innerWidth - elementWidth));
			newPosition.y = Math.max(0, Math.min(newPosition.y, window.innerHeight - elementHeight - 40));
		} else {
			console.log('drag element here');
			newPosition.x = Math.max(0, Math.min(newPosition.x, window.innerWidth - 100));
			newPosition.y = Math.max(0, Math.min(newPosition.y, window.innerHeight - 82 - 40));
		}

		setPosition(newPosition);
		setDraggingOut(true);
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
	return { onMouseDownDrag, position, dragging, draggingOut };
};
