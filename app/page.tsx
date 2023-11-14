'use client';
import Windows from '@/components/windows-xp';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { useWindowsStore } from '@/stores/windows-store';
import { useEffect, useMemo } from 'react';

const Home = () => {
	const { width } = useWindowDimensions();
	const { setIsMobile } = useWindowsStore((state) => state);
	const isMobile = useMemo(() => width < 380, [width]);
	useEffect(() => {
		setIsMobile(isMobile);
	}, [isMobile, setIsMobile]);

	return <Windows />;
};

export default Home;
