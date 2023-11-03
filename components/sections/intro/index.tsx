'use client';
import SocialMediaButton from '@/components/ui/social-media-buttons';
import { mockUser } from '@/mock/mock-data';
import SkillsComponent from './skills';
import TypingAnimation from './typing-animation';
import Profile from './profile';

const Intro = () => {
	return (
		<section id='intro'>
			<div className='text-center bg-slate-100 text-gray-900 p-10 mx-5 rounded-xl'>
				<p className='text-xl text-gray-800'>Hello!</p>
				<h1 className='text-4xl font-bold mb-2'>{"I'm Bernhard Silva"}</h1>
				<TypingAnimation />
				<div className='p-20'>
					<SocialMediaButton />
				</div>
				<SkillsComponent skills={mockUser.skills} />
				<Profile profile={mockUser} />
			</div>
		</section>
	);
};

export default Intro;
