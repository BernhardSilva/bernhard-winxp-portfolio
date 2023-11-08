import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type ButtonMaximizeProps = {
	maximizeHandler: () => void;
};

const WindowsMaximizeButton = ({ maximizeHandler }: ButtonMaximizeProps) => {
	const handleMaximize = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation(); //prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
		maximizeHandler();
	};

	return (
		<button
			onClick={handleMaximize}
			className='w-5 h-5 bg-blue-500 hover:bg-blue-600 active:bg-red-700 border-[1px] border-white rounded text-white text-sm font-bold'
		>
			<Icon className='ml-[1.37px]' icon='ph:square-bold' width={15} height={15} />
		</button>
	);
};

export default WindowsMaximizeButton;
