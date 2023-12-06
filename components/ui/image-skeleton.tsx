import React from 'react';

type Props = {
	image: React.ReactNode;
	imageLoaded: boolean;
	width: number;
	height: number;
};

const ImageSkeleton = ({ image, imageLoaded, width, height }: Props) => {
	return (
		<div className='p-1'>
			{!imageLoaded ? (
				<div
					className={`animate-pulse bg-gradient-to-r from-gray-500 to-gray-700 rounded-md w-[${width}px] h-[${height}px]`}
				></div>
			) : (
				image
			)}
		</div>
	);
};

export default ImageSkeleton;
