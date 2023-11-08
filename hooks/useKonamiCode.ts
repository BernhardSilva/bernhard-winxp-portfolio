import { useEffect, useState, useMemo, KeyboardEvent } from 'react';

export const useKonamiCode = (callback: () => void) => {
	const [sequenceIndex, setSequenceIndex] = useState(0);
	const [isKonamiCodeActivated, setIsKonamiCodeActivated] = useState(false);
	const konamiCodeSequence = useMemo(
		() => [
			'ArrowUp',
			'ArrowUp',
			'ArrowDown',
			'ArrowDown',
			'ArrowLeft',
			'ArrowRight',
			'ArrowLeft',
			'ArrowRight',
			'b',
			'a'
		],
		[]
	);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const sequence = konamiCodeSequence[sequenceIndex];
			//I add the lenght condition to avoid the shift key
			const eventKey = event?.key?.length > 1 ? event?.key : event?.key?.toLowerCase();
			if (eventKey === sequence) {
				setSequenceIndex(sequenceIndex + 1);

				if (!isKonamiCodeActivated && sequenceIndex + 1 === konamiCodeSequence.length) {
					setSequenceIndex(0);
					callback();
					console.log('konami code activated');
					setIsKonamiCodeActivated(true);
				}
			} else {
				setSequenceIndex(0);
			}
		};

		window.addEventListener('keydown', handleKeyDown as any);
		return () => {
			window.removeEventListener('keydown', handleKeyDown as any);
		};
	}, [sequenceIndex, konamiCodeSequence, callback, isKonamiCodeActivated]);

	const resetSequence = () => setSequenceIndex(0);

	return { resetSequence, callback };
};
