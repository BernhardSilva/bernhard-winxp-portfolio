import React from 'react';
import TypingAnimation from './typing-animation';
import { User } from '@/types';
import { useWindowsStore } from '@/stores/windows-store';

type PresentationProps = {
	user: User;
};

const Presentation = ({ user }: PresentationProps) => {
	const { isMobile } = useWindowsStore();

	return (
		<div>
			<p className={`text-xl text-black dark:text-white`}>Hello!</p>
			<h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-2`}>{`I'm ${user.name}`}</h1>
			<TypingAnimation userText={user.typingAnimationText} />
		</div>
	);
};

export default Presentation;
