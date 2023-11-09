import React from 'react';
import TypingAnimation from './typing-animation';
import { User } from '@/types';

type PresentationProps = {
	user: User;
};

const Presentation = ({ user }: PresentationProps) => {
	return (
		<div>
			<p className={`text-xl text-black dark:text-white`}>Hello!</p>
			<h1 className='text-4xl font-bold mb-2'>{`I'm ${user.name}`}</h1>
			<TypingAnimation userText={user.typingAnimationText}/>
		</div>
	);
};

export default Presentation;
