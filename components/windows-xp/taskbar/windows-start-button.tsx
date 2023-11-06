import Image from 'next/image';
import React from 'react';

type WindowsStartButton = {
	handleStartClick: () => void;
};

const WindowsStartButton = ({ handleStartClick }: WindowsStartButton) => {
	return (
		<button
			onClick={handleStartClick}
			className='px-3 py-2 rounded-md text-white flex gap-1 rounded-r-3xl h-[42px] w-28 
			bg-gradient-to-br from-green-700 to-green-900 transition duration-500 ease-in-out hover:from-green-500 hover:to-green-700'
		>
			<Image
				src='https://www.pngall.com/wp-content/uploads/2/Windows-Logo.png'
				width={30}
				height={30}
				alt='windows-start'
			/>
			Start
		</button>
	);
};

export default WindowsStartButton;
