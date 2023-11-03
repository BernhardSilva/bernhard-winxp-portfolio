import { User } from '@/types';
import React from 'react';

type ProfileProps = {
	profile: User;
};

const Profile = ({ profile }: ProfileProps) => {
	return (
		<>
			<h5>About me</h5>
			<h2>Let me introduce myself.</h2>
			<p>{profile.about}</p>
		</>
	);
};

export default Profile;
