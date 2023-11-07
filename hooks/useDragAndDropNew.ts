import { useEffect, useRef, useState } from 'react';

type Props = {
	elementRef: any;
	initialPosition: { x: number; y: number };
};

export const useDragAndDropNew = ({ elementRef, initialPosition }: Props) => {
	const [position, setPosition] = useState(initialPosition);

	const handleMouseDown = (e: MouseEvent) => {
		e.preventDefault();
		const squareRect = elementRef.current.getBoundingClientRect();
		const offsetX = e.clientX - squareRect.left;
		const offsetY = e.clientY - squareRect.top;

		const handleMouseMove = (e: MouseEvent) => {
			let newX = e.clientX - offsetX;
			let newY = e.clientY - offsetY;

			const { innerWidth, innerHeight } = window;

			if (newX < 0) newX = 0;
			if (newY < 0) newY = 0;
			if (newX + squareRect.width > innerWidth) newX = innerWidth - squareRect.width;
			if (newY + squareRect.height > innerHeight) newY = innerHeight - squareRect.height;

			setPosition({ x: newX, y: newY });
		};

		const handleMouseUp = () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	return { position, handleMouseDown };
	// const [position, setPosition] = useState(initialPosition);

	// const handleMouseDown = (e: MouseEvent) => {
	//     console.log(e, elementRef)
	// 	e.preventDefault();

	// 	if (!elementRef.current) return;
	// 	const squareRect = elementRef.current.getBoundingClientRect();
	// 	const offsetX = e.clientX - squareRect.left;
	// 	const offsetY = e.clientY - squareRect.top;

	// 	const handleMouseMove = (e: MouseEvent) => {
	// 		let newX = e.clientX - offsetX;
	// 		let newY = e.clientY - offsetY;

	// 		const { innerWidth, innerHeight } = window;

	// 		if (newX < 0) newX = 0;
	// 		if (newY < 0) newY = 0;
	// 		if (newX + squareRect.width > innerWidth) newX = innerWidth - squareRect.width;
	// 		if (newY + squareRect.height > innerHeight) newY = innerHeight - squareRect.height;

	// 		setPosition({ x: newX, y: newY });
	// 	};

	// 	const handleMouseUp = () => {
	// 		document.removeEventListener('mousemove', handleMouseMove);
	// 		document.removeEventListener('mouseup', handleMouseUp);
	// 	};

	// 	document.addEventListener('mousemove', handleMouseMove);
	// 	document.addEventListener('mouseup', handleMouseUp);
	// };

	// return { handleMouseDown, position };
};
