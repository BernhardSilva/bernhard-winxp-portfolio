import { Icon } from '@iconify/react/dist/iconify.js';
import { ChangeEvent, useState } from 'react';

type NodePadProps = {
	textMessage?: string;
};

const Notepad = ({ textMessage }: NodePadProps) => {
	const [text, setText] = useState(textMessage || '');
	const [fontStyle, setFontStyle] = useState('normal');
	const [fontWeight, setFontWeight] = useState('normal');
	const [fontSize, setFontSize] = useState('28');

	const handleExport = () => {
		const element = document.createElement('a');
		const file = new Blob([text], { type: 'text/plain' });
		element.href = URL.createObjectURL(file);
		element.download = 'myFile.txt';
		document.body.appendChild(element);
		element.click();
	};

	const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFontSize(e.target.value);
	};

	const handleFontSizeBlur = () => {
		let newSize = Number(fontSize);
		if (newSize < 28) {
			newSize = 28;
		} else if (newSize > 150) {
			newSize = 150;
		}
		setFontSize(String(newSize));
	};

	return (
		<div className='h-full'>
			<div className='flex justify-between flex-wrap gap-2 place-items-center mb-1'>
				<div className='flex gap-2 flex-wrap'>
					<div>
						<label className='mr-3'>Font Style:</label>
						<select onChange={(e) => setFontStyle(e.target.value)} value={fontStyle} className='dark:text-black'>
							<option value='normal'>Normal</option>
							<option value='italic'>Italic</option>
						</select>
					</div>
					<div>
						<label className='mr-3'>Font Weight:</label>
						<select onChange={(e) => setFontWeight(e.target.value)} value={fontWeight} className='dark:text-black'>
							<option value='normal'>Normal</option>
							<option value='semibold'>Semi Bold</option>
							<option value='bold'>Bold</option>
						</select>
					</div>
					<div>
						<label className='mr-3'>Font Size:</label>
						<input
							type='number'
							min='28'
							max='150'
							value={fontSize}
							onChange={handleFontSizeChange}
							onBlur={handleFontSizeBlur}
							className='w-12 dark:text-black'
						/>
					</div>
				</div>

				<button
					onClick={handleExport}
					className='p-2 rounded-md bg-blue-600 text-white hover:scale-105 hover:bg-blue-500'
				>
					<Icon icon='material-symbols:save' height={20} width={20} />
				</button>
			</div>
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='Start typing...'
				className={`min-h-[95%] w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-${fontWeight} `}
				style={{
					fontStyle: fontStyle,
					fontSize: `${fontSize}px`
				}}
			/>
		</div>
	);
};

export default Notepad;
