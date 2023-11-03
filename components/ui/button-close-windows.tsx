import React from 'react';

type ButtonCloseWindows = {
	closeHandler: () => void;
};

const ButtonCloseWindows = ({ closeHandler }: ButtonCloseWindows) => {
	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation(); //prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
		closeHandler();
	};
	return (
		<button
			onClick={handleClose}
			className='w-6 h-6 bg-red-500 hover:bg-red-600 active:bg-red-700 border-[1px] border-white rounded text-white text-sm font-bold'
		>
			X
		</button>
	);
};

export default ButtonCloseWindows;
