import { words } from '@/mock/mock-data';
import React, { useState, useEffect } from 'react';

const speed = 200;

const TypingAnimation = () => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);

	useEffect(() => {
		const typingSpeed = speed - Math.random() * 100;
		const timeout = setTimeout(
			() => {
				const current = loopNum % words.length;
				const fullText = words[current];

				setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

				if (!isDeleting && text === fullText) {
					setTimeout(() => setIsDeleting(true), 500);
				} else if (isDeleting && text === '') {
					setIsDeleting(false);
					setLoopNum(loopNum + 1);
				}

				setIndex(isDeleting ? index - 1 : index + 1);
			},
			isDeleting ? typingSpeed : typingSpeed
		);

		return () => clearTimeout(timeout);
	}, [text, isDeleting, index, loopNum]);

	return (
		<div className='flex items-center justify-center text-blue-500'>
			<h1 className='text-4xl font-bold'>
				{text}
				<span className='text-red-500 text-3xl blink'>|</span>
			</h1>
		</div>
	);
};

export default TypingAnimation;
