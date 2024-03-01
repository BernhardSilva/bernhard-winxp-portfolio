import { useEffect, useState } from 'react';

type Pos = {
	x: number;
	y: number;
};

type UseDragAndDropProps = {
	initialPosition: Pos;
	elementRef: React.RefObject<HTMLDivElement> | null;
	handleDoubleClick?: () => void;
};

export const useDragAndDrop = ({ initialPosition, elementRef, handleDoubleClick }: UseDragAndDropProps) => {
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
		const box = target.getBoundingClientRect();
		setDragging(true);
		setRel({
			x: e.clientX - box.left,
			y: e.clientY - box.top
		});

		// Handle single/double click and dragging
		setClickCount((prev) => prev + 1);
		if (clickCount >= 1) {
			// Double click
			setClickCount(0);
			if (handleDoubleClick) {
				handleDoubleClick();
			}
			clearTimeout(singleClickTimer);
		} else {
			// Single click
			singleClickTimer = setTimeout(() => {
				setClickCount(0);
			}, 200);
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
