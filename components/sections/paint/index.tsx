import usePaint, { Mode } from '@/hooks/usePaint';
import { Icon } from '@iconify/react/dist/iconify.js';

const Paint = () => {
	const {
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
	} = usePaint();

	return (
		<div className=' text-white w-full h-full'>
			<div className='flex flex-wrap justify-center'>
				<div className='flex flex-wrap items-center space-x-4 my-4'>
					<label className='flex flex-col place-items-center text-gray-700 dark:text-white'>
						Color
						<input
							type='color'
							value={color}
							onChange={handleColorChange}
							className='bg-slate-100 dark:bg-slate-900 w-8 h-8 hover:cursor-pointer'
						/>
					</label>
					<label className='flex flex-col place-items-center text-gray-700'>
						Size
						<input
							type='range'
							min='1'
							max='50'
							value={size}
							onChange={handleSizeChange}
							className='hover:cursor-pointer'
						/>
					</label>
					<button
						className={`px-3 py-2 rounded-md ${
							mode === Mode.Draw ? 'bg-blue-500' : 'bg-gray-700'
						} transition duration-300 hover:scale-105`}
						onClick={() => handleModeChange(Mode.Draw)}
					>
						<Icon name='pencil' className='w-8 h-8' icon={'ph:pencil-bold'} />
					</button>
					<button
						className={`px-3 py-2 rounded-md ${
							mode === Mode.Erase ? 'bg-orange-500' : 'bg-gray-700'
						} transition duration-300 hover:scale-105`}
						onClick={() => handleModeChange(Mode.Erase)}
					>
						<Icon name='eraser' className='w-8 h-8' icon='solar:eraser-bold-duotone' />
					</button>
					<button
						className={`px-3 py-2 rounded-md bg-yellow-500 transition duration-300 hover:scale-105 ${
							undoEmpty && 'brightness-75'
						}`}
						disabled={undoEmpty}
						onClick={undo}
					>
						<Icon name='undo' className='w-8 h-8' icon='dashicons:undo' />
					</button>
					<button
						className={`px-3 py-2 rounded-md bg-yellow-500 transition duration-300 hover:scale-105 ${
							redoEmpty && 'brightness-75'
						}`}
						onClick={redo}
						disabled={redoEmpty}
					>
						<Icon name='redo' className='w-8 h-8' icon='dashicons:redo' />
					</button>
					<button
						className='px-3 py-2 rounded-md bg-red-500 transition duration-300 hover:scale-105'
						onClick={clearCanvas}
					>
						<Icon name='clear' className='w-8 h-8' icon='ic:twotone-delete' />
					</button>
					<button
						className={`px-3 py-2 rounded-md bg-green-500 transition duration-300 ${'hover:scale-105'}`}
						onClick={exportAsWebP}
					>
						<Icon name='undo' className='w-8 h-8' icon='fluent:save-image-20-filled' />
					</button>
				</div>
			</div>
			<div className='w-full h-[87%] overflow-auto bg-white'>
				<canvas
					onMouseDown={startDrawing}
					onMouseUp={finishDrawing}
					onMouseMove={draw}
					ref={canvasRef}
					className={`${mode === Mode.Draw ? 'cursor-crosshair' : 'cursor-grab'}`}
				/>
			</div>
		</div>
	);
};

export default Paint;
