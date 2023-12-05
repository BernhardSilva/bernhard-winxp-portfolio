import { useClickOutside } from '@/hooks/useClickOuside';
import { PageState, usePageStore } from '@/stores/page-store';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';
import Tab from './tab';

type Props = {
	pages: PageState[] | undefined;
};

const DropDownTabs = ({ pages }: Props) => {
	const { activePageId } = usePageStore((state) => state);
	const [selectedPage, setSelectedPage] = useState<PageState>();

	const { elementRef, setIsOpenClickOutside, isOpenClickOutside } = useClickOutside(false);

	const handleSelect = () => {
		setIsOpenClickOutside(!isOpenClickOutside);
	};

	useEffect(() => {
		setSelectedPage(pages?.find((item) => item.id === activePageId));
	}, [activePageId, pages]);

	return (
		<div className='text-white' ref={elementRef}>
			<div className='relative'>
				{pages?.length !== 0 && (
					<div>
						<button
							className='inline-flex justify-center left w-44 rounded-md 
							bg-blue-500 hover:bg-blue-400
							p-2 shadow-lg hover:cursor-pointer gap-2'
							onMouseEnter={() => setIsOpenClickOutside(true)}
							onMouseLeave={() => setIsOpenClickOutside(false)}
							id='options-menu'
							aria-haspopup='true'
							aria-expanded='true'
							onClick={() => setIsOpenClickOutside(!isOpenClickOutside)}
						>
							<Icon icon={selectedPage?.icon ? selectedPage.icon : 'iconoir:select-window'} height={20} width={20} />
							<label>{selectedPage?.name ? selectedPage.name : 'Select page'} ...</label>
						</button>
					</div>
				)}

				{isOpenClickOutside && (
					<div
						className='absolute bottom-10 p-0.5 w-44 rounded-md bg-blue-600 opacity-95'
						onMouseEnter={() => setIsOpenClickOutside(true)}
						onMouseLeave={() => setIsOpenClickOutside(false)}
					>
						<div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
							{pages?.map((page) => (
								<div key={page.id} onClick={handleSelect}>
									<Tab key={page.id} page={page} className='justify-between mx-2' />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DropDownTabs;
