import { useTheme } from '@/hooks/useTheme';
import React, { useEffect, useState } from 'react';

type DesktopProps = {
	children: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps) => {
	const { theme } = useTheme();
	const wallpaperLight = '/images/windows-xp/wallpaper-xp.webp';
	const wallpaperDark = '/images/windows-xp/wallpaper-xp-dark.webp';

	const [wallpaper, setWallpaper] = useState(wallpaperLight);

	useEffect(() => {
		const wallpaper = theme === 'dark' ? wallpaperDark : wallpaperLight;
		setWallpaper(wallpaper);
	}, [theme]);

	return (
		<div
			id='desktop'
			className='bg-gray-900 text-white relative h-full flex-grow overflow-hidden bg-cover'
			style={{ backgroundImage: `url(${wallpaper})` }}
		>
			{children}
		</div>
	);
};

export default Desktop;
