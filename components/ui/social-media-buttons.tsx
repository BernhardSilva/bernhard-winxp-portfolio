import { SocialMedia as SocialMediaType } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { HTMLAttributes } from 'react';

type SocialMediaProps = HTMLAttributes<HTMLDivElement> & {
	social: SocialMediaType[] | undefined;
	backgroundColor: string
};

const SocialMedia = ({ social, backgroundColor, ...props }: SocialMediaProps) => {
	return (
		<div {...props}>
			<div className='flex justify-center gap-1'>
				{social?.map((item, index) => (
					<a key={index} href={item.url} target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
						<button
							className={`shadow-xl rounded-full p-1 transition duration-200 ease-in-out transform hover:scale-110 dark:bg-slate-100 ${backgroundColor}`}
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
