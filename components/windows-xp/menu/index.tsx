import React from 'react';
import MenuItem from './menu-item';
import { Page } from '@/types';

type MenuProps = {
	handlePageClick: (id: string) => void;
	pages: Page[];
};

const Menu = ({ pages, handlePageClick }: MenuProps) => {
	return (
		<ul className='p-2 bg-white absolute bottom-12 left-0 rounded-md'>
			{pages.map((page) => (
				<MenuItem key={page.id} page={page} handleClick={handlePageClick} />
			))}
		</ul>
	);
};

export default Menu;
