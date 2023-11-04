import { SocialMedia as SocialMediaType } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type SocialMediaProps = {
	className: string;
	social: SocialMediaType[];
};

const SocialMedia = ({ social, className }: SocialMediaProps) => {
	return (
		<div className={className}>
			<div className='flex justify-center gap-5'></div>
			{social.map((item, index) => (
				<a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
					<button className='shadow-xl rounded-full p-1'>
						<Icon icon={item.icon} width={32} height={32} color={item?.color} />
					</button>
				</a>
			))}
		</div>
	);
};

export default SocialMedia;
