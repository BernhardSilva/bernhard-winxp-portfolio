import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type Props = {
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProjectSearch = ({ handleSearch }: Props) => {
	return (
		<div className='relative'>
			<input
				type='text'
				placeholder='Search Projects'
				className='px-3 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white'
				onChange={handleSearch}
			/>
			<button className='absolute right-2 top-2.5'>
				<Icon icon='akar-icons:search' className='text-slate-500 dark:text-gray-200' />
			</button>
		</div>
	);
};

export default ProjectSearch;
