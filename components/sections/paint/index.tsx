import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const Paint = (props: Props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const contextRef = useRef<CanvasRenderingContext2D | null>(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [color, setColor] = useState('#000000');
	const [size, setSize] = useState(2);
	const [history, setHistory] = useState<ImageData[]>([]);
	const [step, setStep] = useState(-1);
	const [eraser, setEraser] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current!;
		console.log(canvas);
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerHeight * 2;
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;

		const context = canvas.getContext('2d')!;
		context.scale(2, 2);
		context.lineCap = 'round';
		context.strokeStyle = color;
		context.lineWidth = size;
		contextRef.current = context;
	}, []);

	const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current!.beginPath();
		contextRef.current!.moveTo(offsetX, offsetY);
		setIsDrawing(true);
	};

	const finishDrawing = () => {
		contextRef.current!.closePath();
		setIsDrawing(false);
		setHistory([...history, contextRef.current!.getImageData(0, 0, window.innerWidth * 2, window.innerHeight * 2)]);
		setStep(step + 1);
	};

	const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current!.lineTo(offsetX, offsetY);
		contextRef.current!.stroke();
	};

	const undo = () => {
		if (step <= 0) {
			contextRef.current!.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
		} else {
			setStep(step - 1);
			contextRef.current!.putImageData(history[step - 1], 0, 0);
		}
	};

	const redo = () => {
		if (step < history.length - 1) {
			setStep(step + 1);
			contextRef.current!.putImageData(history[step + 1], 0, 0);
		}
	};

	const toggleDrawEraser = () => {
		setEraser(!eraser);
		contextRef.current!.globalCompositeOperation = eraser ? 'source-over' : 'destination-out';
	};
	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		setColor(e.target.value);
		contextRef.current!.strokeStyle = e.target.value;
	};

	const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSize(parseInt(e.target.value));
		contextRef.current!.lineWidth = parseInt(e.target.value);
	};

	return (
		<div className='h-full bg-white text-white p-5'>
			<div className='flex justify-between items-center'>
				<div>
					<h1 className='text-3xl font-bold text-green-600'>Blackboard</h1>
				</div>
				<div className='flex items-center space-x-4'>
					<input type='color' onChange={handleColorChange} className='rounded-md' />
					<input
						type='range'
						min={1}
						max={100}
						value={size}
						onChange={(e) => setSize(e.target.value as unknown as number)}
						className='p-2 rounded-md bg-gray-700 text-white'
					/>
					<button onClick={toggleDrawEraser} className='px-3 py-2 rounded-md bg-gray-700 text-white'>
						{eraser ? 'Drawing' : 'Erasing'}
					</button>
					<button onClick={undo} className='px-3 py-2 rounded-md bg-gray-700 text-white'>
						Undo
					</button>
					<button onClick={redo} className='px-3 py-2 rounded-md bg-gray-700 text-white'>
						Redo
					</button>
				</div>
			</div>
			<canvas
				onMouseDown={startDrawing}
				onMouseUp={finishDrawing}
				onMouseMove={draw}
				ref={canvasRef}
				className={`mt-10 ${eraser ? 'cursor-eraser' : 'cursor-pointer'}`}
			/>
		</div>
	);
};

export default Paint;
