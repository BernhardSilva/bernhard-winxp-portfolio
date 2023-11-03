//drag and drop

import { useEffect, useState } from 'react';

export const useDragAndDrop = () => {
	const [dragging, setDragging] = useState(false);
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [rel, setRel] = useState<any>(null); // position relative to the cursor

	const onMouseDownDrag = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.button !== 0) return;
		const box = (e.target as HTMLElement).getBoundingClientRect();
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
			x: e.pageX - rel.x,
			y: e.pageY - rel.y
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
