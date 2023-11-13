import { PageState, usePageStore } from '@/stores/page-store';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect } from 'react';

type MenuItemProps = {
	page: PageState;
};

const MenuItem = ({ page }: MenuItemProps) => {
	const { openPage } = usePageStore((state) => state);
	const [blockOnMobile, setBlockOnMobile] = React.useState('');

	const handleClick = (id: string) => {
		openPage(id);
	};

	useEffect(() => {
		const blockedMobilePages = ['tictactoe', 'paint'];
		if (blockedMobilePages.includes(page.id)) {
			setBlockOnMobile('hidden md:block pointer-events-none md:pointer-events-auto');
		}
	}, [page]);

	return (
		<div className={`rounded-t-xl p-2`}>
			<li
				className={`p-2 text-black dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-950 rounded-md cursor-pointer ${blockOnMobile}`}
				onClick={() => handleClick(page.id)}
			>
				<div className={`flex justify-start place-items-center`}>
					<Icon icon={page.icon} className={`mr-2 ${page?.color}`} />
					<span className='text-lg'>{page?.name}</span>
				</div>
			</li>
		</div>
	);
};

export default MenuItem;
