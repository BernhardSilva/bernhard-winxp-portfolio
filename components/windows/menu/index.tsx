import React from 'react';
import MenuItem from './menu-item';
import { Page } from '@/types';

type MenuListProps = {
	handlePageClick: (id: string) => void;
	pages: Page[];
};

const MenuList = ({ pages, handlePageClick }: MenuListProps) => {
	return (
		<ul className='p-4 bg-white py-5 absolute bottom-12 left-0 rounded-md'>
			{pages.map((page) => (
				<MenuItem key={page.id} page={page} handleClick={handlePageClick} />
			))}
		</ul>
	);
};

export default MenuList;
