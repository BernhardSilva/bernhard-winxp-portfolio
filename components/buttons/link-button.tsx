import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type Props = {
	text: string;
	link: string;
	icon: string;
	color: string;
};

const LinkButton = ({ text, link, icon, color }: Props) => {
	return (
		<a href={link} target='_blank'>
			<button
				className={`flex px-3 py-2 rounded-md
            ${color} transition duration-300 hover:scale-105 text-white`}
			>
				<Icon icon={icon} className='mr-2' height={25} width={25} />
				<span>{text}</span>
			</button>
		</a>
	);
};

export default LinkButton;
