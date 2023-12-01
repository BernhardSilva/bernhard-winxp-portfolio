'use client';
import Windows from '@/components/windows-xp';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { useWindowsStore } from '@/stores/windows-store';
import { useEffect } from 'react';

const Home = () => {
	const { width, height } = useWindowDimensions();
	const { setIsMobile } = useWindowsStore((state) => state);
	useEffect(() => {
		if (width <= 380 && height < 930) {
			console.log('ismob');
			setIsMobile(true);
		} else {
			console.log('is not mob');
			setIsMobile(false);
		}
	}, [width, height, setIsMobile]);

	return <Windows />;
};

export default Home;
