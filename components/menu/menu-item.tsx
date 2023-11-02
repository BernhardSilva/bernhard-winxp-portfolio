// MenuItem.js
import { Page } from '@/types';
import React from 'react';

type MenuItemProps = {
	page: Page;
	onClick: (id: string) => void;
};

const MenuItem = ({ page, onClick }: MenuItemProps) => {
	return (
		<>
			<li className='p-2 hover:bg-gray-600 cursor-pointer' onClick={() => onClick(page.name.toLocaleLowerCase())}>
				{page?.name}
			</li>
		</>
	);
};

export default MenuItem;
