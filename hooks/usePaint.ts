import React, { useRef, useState, useEffect } from 'react';

type Path = {
	color: string | CanvasGradient | CanvasPattern;
	size: number;
	data: ImageData;
};

export enum Mode {
	Draw = 'draw',
	Erase = 'erase'
}

const usePaint = () => {
	const [color, setColor] = useState('#000000');
	const [size, setSize] = useState(5);
	const [mode, setMode] = useState(Mode.Draw);
	const [paths, setPaths] = useState<Path[]>([]);
	const [redoPaths, setRedoPaths] = useState<Path[]>([]);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const contextRef = useRef<CanvasRenderingContext2D | null>(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const undoEmpty = paths.length === 0;
	const redoEmpty = redoPaths.length === 0;

	useEffect(() => {
		const canvas = canvasRef.current!;
		const context = canvas.getContext('2d')!;

		const setCanvasSize = () => {
			const parentElement = canvas.parentElement;
			if (parentElement) {
				// Save current canvas content
				const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

				// Resize the canvas
				canvas.width = parentElement.offsetWidth * 2;
				canvas.height = parentElement.offsetHeight * 2;
				canvas.style.width = `${parentElement.offsetWidth}px`;
				canvas.style.height = `${parentElement.offsetHeight}px`;

				// Restore canvas content
				context.putImageData(imageData, 0, 0);

				// Clearing the part of canvas that is outside of imageData
				context.clearRect(imageData.width, 0, canvas.width - imageData.width, canvas.height);
				context.clearRect(0, imageData.height, canvas.width, canvas.height - imageData.height);
			}
		};

		// Initial set of canvas size

		const resizeObserver = new ResizeObserver(() => {
			setCanvasSize();
			context.scale(2, 2); // Rescale context after resizing canvas
		});

		if (canvas.parentElement) {
			resizeObserver.observe(canvas.parentElement);
		}

		context.scale(2, 2);
		context.lineCap = 'round';
		contextRef.current = context;

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		const { offsetX, offsetY } = nativeEvent;

		contextRef.current!.strokeStyle = color;
		contextRef.current!.lineWidth = size;
		contextRef.current!.beginPath();
		contextRef.current!.moveTo(offsetX, offsetY);
		setIsDrawing(true);
	};

	const finishDrawing = () => {
		contextRef.current!.closePath();
		setIsDrawing(false);
		setPaths((oldPaths) => [
			...oldPaths,
			{
				color: contextRef.current!.strokeStyle,
				size: contextRef.current!.lineWidth,
				data: contextRef.current!.getImageData(0, 0, canvasRef.current!.width, canvasRef.current!.height)
			}
		]);
	};

	const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current!.lineTo(offsetX, offsetY);
		contextRef.current!.stroke();
	};

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
		contextRef.current!.strokeStyle = e.target.value;
	};

	const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSize = e.target.value;
		console.log(newSize);
		setSize(Number(newSize));
	};

	const handleModeChange = (value: Mode) => {
		setMode(value);
		if (value === Mode.Erase) {
			contextRef.current!.globalCompositeOperation = 'destination-out';
		} else {
			contextRef.current!.globalCompositeOperation = 'source-over';
		}
	};

	const clearCanvas = () => {
		contextRef.current!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
	};

	const undo = () => {
		if (undoEmpty) return;

		const lastPath = paths[paths.length - 1];

		setPaths((oldPaths) => oldPaths.slice(0, oldPaths.length - 1));
		setRedoPaths((oldRedoPaths) => [lastPath, ...oldRedoPaths]);

		if (paths.length === 1) {
			clearCanvas();
		} else {
			contextRef.current!.putImageData(paths[paths.length - 2].data, 0, 0);
		}
	};

	const redo = () => {
		if (redoEmpty) return;

		const lastRedoPath = redoPaths[0];

		setPaths((oldPaths) => [...oldPaths, lastRedoPath]);
		setRedoPaths((oldRedoPaths) => oldRedoPaths.slice(1));

		contextRef.current!.putImageData(lastRedoPath.data, 0, 0);
	};

	const exportAsWebP = () => {
		const dataUrl = canvasRef.current!.toDataURL('image/webp');
		const a = document.createElement('a');
		a.href = dataUrl;
		a.download = 'image.webp';
		a.click();
	};

	return {
		exportAsWebP,
		color,
		handleColorChange,
		size,
		handleSizeChange,
		mode,
		handleModeChange,
		canvasRef,
		startDrawing,
		finishDrawing,
		draw,
		clearCanvas,
		undo,
		redo,
		redoEmpty,
		undoEmpty
	};
};

export default usePaint;
