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

	const calculateNewPosition = (e: MouseEvent, rel: { x: number; y: number }) => {
		return {
			x: e.clientX - rel.x,
			y: e.clientY - rel.y
		};
	};

	const validateWindowBounds = (pos: { x: number; y: number }, elementWidth?: number, elementHeight?: number) => {
		const width = elementWidth || 100;
		const height = elementHeight || 82;

		return {
			x: Math.max(0, Math.min(pos.x, window.innerWidth - width)),
			y: Math.max(0, Math.min(pos.y, window.innerHeight - height - 40))
		};
	};

	const onMouseMove = (e: MouseEvent) => {
		if (!dragging) return;

		const newPosition = calculateNewPosition(e, rel);

		const elementWidth = elementRef?.current?.offsetWidth;
		const elementHeight = elementRef?.current?.offsetHeight;

		const validPosition = validateWindowBounds(newPosition, elementWidth, elementHeight);

		setPosition(validPosition);
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
