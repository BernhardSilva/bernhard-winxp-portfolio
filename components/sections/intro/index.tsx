'use client';
import TypingAnimation from './typing-animation';

const Intro = () => {
	return (
		// <div className='min-h-screen bg-gray-800 text-white p-10'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold mb-2'>Bernhard</h1>
				<p className='text-xl'>Fullstack Programmer</p>
				<TypingAnimation />
				<p className='text-md text-gray-400 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		// </div>
	);
};

export default Intro;
