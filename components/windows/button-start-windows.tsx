import Image from 'next/image';
import React from 'react';

type ButtonStartWindows = {
	handleStartClick: () => void;
};

const ButtonStartWindows = ({ handleStartClick }: ButtonStartWindows) => {
	return (
		<button
			onClick={handleStartClick}
			className='px-3 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white flex gap-1'
		>
			<Image
				className='mt-1'
				src='https://www.pngall.com/wp-content/uploads/2/Windows-Logo.png'
				width={20}
				height={20}
				alt='hi'
			/>
			Start
		</button>
	);
};

export default ButtonStartWindows;
