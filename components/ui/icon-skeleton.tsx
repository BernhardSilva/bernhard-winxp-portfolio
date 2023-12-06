import React from 'react';

type Props = {
	icon: React.ReactNode;
	iconLoaded: boolean;
};

const IconSkeleton = ({ icon, iconLoaded }: Props) => {
	return (
		<div>
			{!iconLoaded ? (
				<div
					className={`animate-pulse bg-gradient-to-r from-gray-500 to-gray-700 rounded-full w-[50px] h-[50px]`}
				></div>
			) : (
				icon
			)}
		</div>
	);
};

export default IconSkeleton;
