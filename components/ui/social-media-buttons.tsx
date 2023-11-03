import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const SocialMedia = () => {
	return (
		<div className='flex justify-center gap-5'>
			<a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
				<button>
					<Icon icon='skill-icons:linkedin' width={32} height={32} />
				</button>
			</a>
			<a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
				<button>
					<Icon icon='logos:twitter' width={32} height={32} />
				</button>
			</a>
			<a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
				<button>
					<Icon icon='devicon:github' width={32} height={32} />
				</button>
			</a>
		</div>
	);
};

export default SocialMedia;
