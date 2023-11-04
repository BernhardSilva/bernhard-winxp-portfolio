import SocialMediaButton from '@/components/ui/social-media-buttons';
import { mockUser } from '@/mock/mock-data';
import Profile from './profile';
import Skills from './skills';
import TypingAnimation from './typing-animation';

const Intro = () => {
	return (
		<section id='intro' className='min-h-full flex justify-center items-center'>
			<div className='relative text-center bg-slate-100 text-gray-700 p-10 mx-5 rounded-xl'>
				<SocialMediaButton social={mockUser.contact.socialMedia} className='absolute top-0 left-0 mt-2 ml-2' />
				<p className='text-xl text-gray-800'>Hello!</p>
				<h1 className='text-4xl font-bold mb-2'>{`I'm ${mockUser.name}`}</h1>
				<TypingAnimation />
				<Profile profile={mockUser} />
				<Skills skills={mockUser.skills} />
			</div>
		</section>
	);
};

export default Intro;
