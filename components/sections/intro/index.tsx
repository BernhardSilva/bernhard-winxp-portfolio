import SocialMediaButton from '@/components/ui/social-media-buttons';
import { mockUser } from '@/mock/mock-data';
import Presentation from './presentation';
import Profile from './profile';
import Skills from './skills';

const Intro = () => {
	return (
		<div className='grid place-items-center h-full'>
			<SocialMediaButton social={mockUser.contact.socialMedia} />
			<div className='mt-5'>
				<Presentation user={mockUser} />
				<Profile profile={mockUser} />
				<Skills skills={mockUser.skills} />
			</div>
		</div>
	);
};

export default Intro;
