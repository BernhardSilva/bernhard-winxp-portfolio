import { Icon } from '@iconify/react/dist/iconify.js';
import React, { HTMLAttributes } from 'react';

type ButtonCloseWindows = HTMLAttributes<HTMLButtonElement> & {
	closeHandler: () => void;
};

const ButtonCloseWindows = ({ closeHandler, ...props }: ButtonCloseWindows) => {
	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation(); //prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
		closeHandler();
	};
	return (
		<button
			{...props}
			onClick={handleClose}
			className='w-5 h-5 bg-red-500 hover:bg-red-600 active:bg-red-700 border-[1px] border-white rounded text-white text-sm font-bold'
		>
			<Icon className='ml-[1.37px]' icon='ic:round-close' width={15} height={15} />
		</button>
	);
};

export default ButtonCloseWindows;
