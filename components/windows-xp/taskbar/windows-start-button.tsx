import Image from 'next/image';
import React from 'react';

type WindowsStartButton = {
	handleStartClick: () => void;
};

const WindowsStartButton = ({ handleStartClick }: WindowsStartButton) => {
	return (
		<button
			onClick={handleStartClick}
			className='flex gap-1 place-items-center px-3 py-2 text-white rounded-r-3xl h-[44px] w-28
			border-r-1 border-t-1 border-b-2 border-green-900
			bg-gradient-to-br from-green-700 to-green-900 transition duration-500 ease-in-out hover:from-green-500 hover:to-green-700'
		>
			<Image
				className='w-auto h-auto'
				src='/images/windows-xp/windows-logo.png'
				width={30}
				height={30}
				alt='windows-start'
			/>
			<div>Start</div>
		</button>
	);
};

export default WindowsStartButton;
