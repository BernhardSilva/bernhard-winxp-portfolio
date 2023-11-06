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
			<div className='flex justify-center gap-1'>
				{social.map((item, index) => (
					<a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
						<button className='shadow-xl rounded-full p-1 cursor-pointer transform hover:scale-110 transition-transform'>
							<Icon icon={item.icon} width={32} height={32} color={item?.color} />
						</button>
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialMedia;
