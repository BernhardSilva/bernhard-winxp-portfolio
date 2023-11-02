import Image from 'next/image';
import React from 'react';

type WindowsButton = {
	handleStartClick: () => void;
};

const WindowsButton = ({ handleStartClick }: WindowsButton) => {
	return (
		<button onClick={handleStartClick} className='px-3 py-2 rounded-md bg-green-700 text-white flex gap-1'>
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

export default WindowsButton;
