import React from 'react';

type ButtonCloseWindows = {
	closeHandler: () => void;
	size?: number;
};

const ButtonCloseWindows = ({ closeHandler, size }: ButtonCloseWindows) => {
	return (
		<button
			onClick={closeHandler}
			className={`w-${size ? size : 6} h-${
				size ? size : 6
			} bg-red-500 hover:bg-red-600 active:bg-red-700 border-[1px] border-white rounded text-white text-sm font-bold`}
		>
			X
		</button>
	);
};

export default ButtonCloseWindows;
