import { Page } from '@/types';
import React from 'react';

type TabProps = {
	page: Page;
	handlePageClose: (id: string) => void;
};

const Tab = ({ page, handlePageClose }: TabProps) => {
	return (
		<div key={page.id} className='bg-gray-700 p-2 rounded-md shadow-lg hover:cursor-pointer'>
			<span>{page.name}</span>
			<button onClick={() => handlePageClose(page.id)} className='ml-2 text-red-500'>
				x
			</button>
		</div>
	);
};

export default Tab;
