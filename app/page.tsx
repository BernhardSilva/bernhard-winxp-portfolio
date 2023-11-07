'use client';
import Windows from '@/components/windows-xp';
import useCustomAudio from '@/hooks/useCustomAudio';

const Home = () => {
	useCustomAudio('/sounds/windows-xp/windows-xp-startup.mp3', 0.2);
	return <Windows />;
};

export default Home;
