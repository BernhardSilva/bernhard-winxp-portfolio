import { useEffect } from 'react';

const useCustomAudio = (url: string, volume: number = 1) => {
	useEffect(() => {
		const audioElement = new Audio(url);
		audioElement.volume = volume;

		audioElement.addEventListener('canplaythrough', () => {
			audioElement.play();
		});

		return () => {
			audioElement.pause();
		};
	}, [url, volume]);
};

export default useCustomAudio;
