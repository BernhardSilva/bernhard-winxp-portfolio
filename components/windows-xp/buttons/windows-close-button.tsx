import { Icon } from '@iconify/react/dist/iconify.js';
import React, { HTMLAttributes } from 'react';

type WindowsCloseButton = HTMLAttributes<HTMLButtonElement> & {
	closeHandler: () => void;
	className?: string;
};

const WindowsCloseButton = ({ closeHandler, className, ...props }: WindowsCloseButton) => {
	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation(); //prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
		closeHandler();
	};


	return (
		<button
			onClick={handleClose}
			className={`w-5 h-5 bg-red-500 hover:bg-red-600 active:bg-red-700 border-[1px] border-white rounded text-white text-sm font-bold ${className}`}
			{...props}
		>
			<Icon className='ml-[1.45px]' icon='ic:round-close' width={15} height={15} />
		</button>
	);
};

export default WindowsCloseButton;
