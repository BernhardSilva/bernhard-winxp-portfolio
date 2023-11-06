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
			<li className='p-2 hover:bg-blue-300 rounded-md cursor-pointer text-black' onClick={() => handleClick(page.id)}>
				<div className='flex justify-start place-items-center'>
					<Icon icon={page.icon} className='mr-2' />
					<span className='text-lg'>{page?.name}</span>
				</div>
			</li>
		</div>
	);
};

export default MenuItem;
