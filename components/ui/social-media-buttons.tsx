import { SocialMedia as SocialMediaType } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { HTMLAttributes } from 'react';

type SocialMediaProps = HTMLAttributes<HTMLDivElement> & {
	social: SocialMediaType[] | undefined;
};

const SocialMedia = ({ social, ...props }: SocialMediaProps) => {
	return (
		<div {...props}>
			<div className='flex justify-center gap-1'>
				{social?.map((item, index) => (
					<a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
						<button
							className={`shadow-xl rounded-full p-1 cursor-pointer transform hover:scale-110 transition-transform dark:bg-slate-100`}
						>
							<Icon icon={item.icon} width={32} height={32} color={item?.color} />
						</button>
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialMedia;
