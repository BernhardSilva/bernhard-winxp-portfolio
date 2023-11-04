import { Page } from '@/types';
import React from 'react';
import ButtonCloseWindows from '../buttons/button-close-windows';

type TabProps = {
	page: Page;
	handlePageClose: (id: string) => void;
};

const Tab = ({ page, handlePageClose }: TabProps) => {
	return (
		<div
			key={page.id}
			className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md shadow-lg hover:cursor-pointer flex justify-evenly gap-2 min-w-[100px]'
		>
			<span>{page.name}</span>
			<ButtonCloseWindows closeHandler={() => handlePageClose(page.id)} />
		</div>
	);
};

export default Tab;
