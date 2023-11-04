//drag and drop

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

	const onMouseDownDrag = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.button !== 0) return;
		const target = e.target as HTMLElement;

		// Check if the target has the 'drag-window' class
		const draggableElement = target.closest(`.${element}`);
		if (!draggableElement) return;

		const box = target.getBoundingClientRect();
		setDragging(true);
		setRel({
			x: e.pageX - box.left,
			y: e.pageY - box.top
		});
		e.stopPropagation();
		e.preventDefault();
	};

	const onMouseUp = (e: MouseEvent) => {
		setDragging(false);
		e.stopPropagation();
		e.preventDefault();
	};

	const onMouseMove = (e: MouseEvent) => {
		if (!dragging) return;
		setPos({
			x: e.pageX - rel?.x,
			y: e.pageY - rel?.y
		});
		e.stopPropagation();
		e.preventDefault();
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
