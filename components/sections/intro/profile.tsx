import { User } from '@/types';
import Image from 'next/image';

type ProfileProps = {
	profile: User;
};

const Profile = ({ profile }: ProfileProps) => {
	return (
		<>
			<div className='grid place-items-center space-y-5'>
				<Image className='rounded-full mt-5' src={profile.profileImage} width={250} height={250} alt='profile' />
				<p className='w-fit'>{profile.about}</p>
			</div>
		</>
	);
};

export default Profile;
