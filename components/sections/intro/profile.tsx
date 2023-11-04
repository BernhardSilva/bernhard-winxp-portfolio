import { User } from '@/types';
import Image from 'next/image';

type ProfileProps = {
	profile: User;
};

const Profile = ({ profile }: ProfileProps) => {
	return (
		<>
			<div className='flex items-center space-x-10 justify-center'>
				<Image className='rounded-full' src={profile.profileImage} width={250} height={250} alt='profile' />
				<p className='max-w-md'>{profile.about}</p>
			</div>
		</>
	);
};

export default Profile;
