import React from 'react';

type DesktopProps = {
	children: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps) => {
	return (
		<div
			id='desktop'
			className='min-h-screen bg-gray-900 text-white'
			style={{ backgroundImage: `url(${'https://images2.alphacoders.com/941/941898.jpg'})`, backgroundSize: 'cover' }}
		>
			{children}
		</div>
	);
};

export default Desktop;
