import { useState, useEffect } from 'react';

export function useWindowDimensions() {
	const [dimensions, setDimensions] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth * 0.7 : 600,
		height: typeof window !== 'undefined' ? window.innerHeight * 0.7 : 400
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: window.innerWidth > 468 ? window.innerWidth / 2 : window.innerWidth / 1.5,
				height: window.innerHeight / 2
			});
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return dimensions;
}
