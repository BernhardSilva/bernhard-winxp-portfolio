import React from 'react';

type DesktopProps = {
	children: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps) => {
	return (
		<div
			id='desktop'
			className='bg-gray-900 text-white relative h-full overflow-hidden'
			style={{ backgroundImage: `url(${'/images/windows-xp/wallpaper-xp.jpg'})`, backgroundSize: 'cover',  }}
		>
			{children}
		</div>
	);
};

export default Desktop;
