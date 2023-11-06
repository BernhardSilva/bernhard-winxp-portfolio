import React from 'react';
import SecretWallpaper from './secret';

type DesktopProps = {
	children: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps) => {
	return (
		<div
			id='desktop'
			className=' bg-gray-900 text-white relative h-[96vh] overflow-hidden'
			style={{ backgroundImage: `url(${'https://images2.alphacoders.com/941/941898.jpg'})`, backgroundSize: 'cover' }}
		>
			<SecretWallpaper />
			{children}
		</div>
	);
};

export default Desktop;
