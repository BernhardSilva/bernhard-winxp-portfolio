import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Files = () => {
	const dragDropValuesFile = {
		element: 'file',
		initialPosition: { x: 40, y: 50 }
	};
	const dragDropValuesEplorer = {
		element: 'explorer',
		initialPosition: { x: 40, y: 150 }
	};
	const { onMouseDownDrag: dragFile, pos: posFile } = useDragAndDrop(dragDropValuesFile);
	const { onMouseDownDrag: dragEplorer, pos: posEplorer } = useDragAndDrop(dragDropValuesEplorer);

	const openFile = () => {};

	const openEplorer = () => {};

	return (
		<div className='cursor-pointer'>
			<div onMouseDown={dragFile} className='file'>
				<div
					className='absolute flex flex-col items-center bg-blue-700 bg-transparent rounded-lg shadow-xl p-1'
					style={{ left: posFile.x, top: posFile.y }}
				>
					<Icon icon='bx:file' height={50} width={50} color='#ffffff' />

					<span>{"Don't open"}</span>
				</div>
			</div>
			<div
				className='absolute flex flex-col items-center bg-blue-700 bg-transparent rounded-lg shadow-xl p-1 explorer'
				style={{ left: posEplorer.x, top: posEplorer.y }}
				onMouseDown={dragEplorer}
			>
				<Icon icon='fa-brands:internet-explorer' height={50} width={50} color='#3381f7' />
				<span>{"Don't open"}</span>
			</div>
		</div>
	);
};

export default Files;
