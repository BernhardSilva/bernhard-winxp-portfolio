import { Page } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type MenuItemProps = {
	page: Page;
	handleClick: (id: string) => void;
};

const MenuItem = ({ page, handleClick }: MenuItemProps) => {
	return (
		<div className='rounded-t-xl'>
			<li
				className='p-2 py-5 hover:bg-blue-300 rounded-md cursor-pointer text-black'
				onClick={() => handleClick(page.id)}
			>
				<div className='flex justify-start'>
					<Icon icon={page.icon} className='mr-2' />
					{page?.name}
				</div>
			</li>
		</div>
	);
};

export default MenuItem;
