import { useEffect, useState } from 'react';

type Pos = {
	x: number;
	y: number;
};

type UseDragAndDropProps = {
	element: string;
	initialPosition: Pos;
};

export const useDragAndDrop = ({ element, initialPosition }: UseDragAndDropProps) => {
	const [dragging, setDragging] = useState(false);
	const [pos, setPos] = useState<Pos>(initialPosition);
	const [rel, setRel] = useState<any>(); // position relative to the cursor

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
			x: e.pageX - box.left,
			y: e.pageY - box.top
		});
		stopPropagationHandler(e);
	};

	const onMouseUp = (e: MouseEvent) => {
		setDragging(false);
		stopPropagationHandler(e);
	};

	const onMouseMove = (e: MouseEvent) => {
		if (!dragging) return;

		const nextPos = {
			x: e.pageX - rel?.x,
			y: e.pageY - rel?.y
		};

		// Prevent the draggable element from going out of the viewport
		if (isOutOfViewport(nextPos)) {
			return;
		}

		setPos(nextPos);
		stopPropagationHandler(e);
	};

	const isOutOfViewport = (nextPos: Pos) => {
		// Check if the nextPos is out of the viewport
		// Here, we are using a custom size box of the size of the draggable element, adjust accordingly
		if (nextPos.x < 0 || nextPos.y < 0 || nextPos.x + 70 > window.innerWidth || nextPos.y + 120 > window.innerHeight) {
			return true;
		}

		return false;
	};

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};
	});
	return { onMouseDownDrag, pos, dragging };
};
