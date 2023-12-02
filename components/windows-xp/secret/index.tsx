import { useEffect, useState } from 'react';

const SecretWallpaper = () => {
	const [stars, setStars] = useState(
		Array.from({ length: 100 }, () => ({
			top: Math.random() * 100,
			left: Math.random() * 100,
			size: Math.random() * 2
		}))
	);

	const [comets, setComets] = useState(
		Array.from({ length: 10 }, () => ({
			top: Math.random() * 100,
			left: Math.random() * 100,
			size: Math.random() * 2
		}))
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setStars(
				stars.map((star) => ({
					...star,
					top: (star.top + 0.01) % 100
				}))
			);
			setComets(
				comets.map((comet) => ({
					...comet,
					left: (comet.left + 0.1) % 100
				}))
			);
		}, 100);
		return () => clearInterval(interval);
	}, [stars, comets]);

	return (
		<div className='h-full bg-black text-white p-10 relative overflow-hidden'>
			<div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900 to-transparent'></div>
			{stars.map((star, index) => (
				<div
					key={index}
					className='absolute rounded-full bg-white'
					style={{
						top: `${star.top}%`,
						left: `${star.left}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
						animation: `shine ${Math.random() * 5 + 5}s infinite`
					}}
				></div>
			))}
			{comets.map((comet, index) => (
				<div
					key={index}
					className='absolute bg-white rounded-full'
					style={{
						top: `${comet.top}%`,
						left: `${comet.left}%`,
						width: `${comet.size}px`,
						height: `${comet.size}px`,
						animation: `move ${Math.random() * 5 + 5}s linear infinite`
					}}
				></div>
			))}
		</div>
	);
};

export default SecretWallpaper;
