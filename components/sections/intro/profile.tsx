import { useWindowsStore } from '@/stores/windows-store';
import { User } from '@/types';
import Image from 'next/image';

type ProfileProps = {
	profile: User;
};

const Profile = ({ profile }: ProfileProps) => {
	const { isMobile } = useWindowsStore();

	return (
		<>
			<div className='grid place-items-center space-y-5'>
				<Image
					className='rounded-full mt-5'
					src={profile.profileImage}
					width={isMobile ? 200 : 250}
					height={isMobile ? 200 : 250}
					alt='profile'
				/>
				<p className='w-fit max-w-lg'>{profile.about}</p>
			</div>
		</>
	);
};

export default Profile;
