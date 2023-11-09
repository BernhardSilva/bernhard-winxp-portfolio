import { useEffect, useState } from 'react';

const speed = 200;

type TypingAnimationProps = {
	userText: string[];
};

const TypingAnimation = ({ userText }: TypingAnimationProps) => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);

	useEffect(() => {
		const typingSpeed = speed - Math.random() * 100;
		const timeout = setTimeout(
			() => {
				const current = loopNum % userText.length;
				const fullText = userText[current];

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
	}, [text, isDeleting, index, loopNum, userText]);

	return (
		<div className='flex items-center justify-center text-blue-500'>
			<h1 className='text-5xl font-bold'>
				{text}
				<span className='text-blue-500 blink'>|</span>
			</h1>
		</div>
	);
};

export default TypingAnimation;
