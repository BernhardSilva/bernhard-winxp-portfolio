'use client';
import { useEffect, useState } from 'react';

const Blogs = () => {
	const [squares, setSquares] = useState<any>([]);
	const [dragging, setDragging] = useState(false);
	const [draggingIndex, setDraggingIndex] = useState(null);
	const [draggingOffset, setDraggingOffset] = useState({ x: 0, y: 0 });
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, index: any) => {
		setDragging(true);
		setDraggingIndex(index);
		setDraggingOffset({ x: e.clientX - squares[index].x, y: e.clientY - squares[index].y });
	};

	const handleMouseUp = () => {
		setDragging(false);
		setDraggingIndex(null);
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			if (dragging) {
				let newX = e.clientX - draggingOffset.x;
				let newY = e.clientY - draggingOffset.y;
				newX = Math.max(0, Math.min(newX, window.innerWidth - 200));
				newY = Math.max(0, Math.min(newY, window.innerHeight - 200));
				setSquares(
					squares.map((square: any, index: number) =>
						index === draggingIndex ? { ...square, x: newX, y: newY } : square
					)
				);
			}
		};

		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [dragging, draggingIndex, draggingOffset, squares]);

	const addSquare = () => {
		const newX = mousePosition.x;
		const newY = mousePosition.y;
		setSquares([...squares, { x: newX, y: newY }]);
	};

	return (
		<div className='min-h-screen bg-gray-800 text-white p-10'>
			<button onClick={addSquare} className='mb-10 px-5 py-2 rounded-md bg-blue-500 text-white'>
				Add Square
			</button>
			{squares.map((square: any, index: number) => (
				<div
					key={index}
					style={{ left: `${square.x}px`, top: `${square.y}px`, position: 'absolute' }}
					onMouseDown={(e) => handleMouseDown(e, index)}
					className='w-48 h-48 bg-red-500 cursor-pointer'
				/>
			))}
		</div>
	);
};

export default Blogs;
