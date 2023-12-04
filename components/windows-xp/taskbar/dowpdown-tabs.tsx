import { PageState } from '@/stores/page-store';
import { useEffect, useState } from 'react';
import Tab from './tab';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
	pages: PageState[] | undefined;
};

const DropDownTabs = ({ pages }: Props) => {
	const [selectedPage, setSelectedPage] = useState<PageState>();

	console.log(selectedPage);

	const [open, setOpen] = useState(false);

	const handleSelect = (page) => {
		setSelectedPage(page);
		setOpen(false);
	};

	const handleOutsideClick = (e) => {
		if (!e.target.closest('#options-menu')) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<div className=' text-white'>
			<div className='relative'>
				<div>
					<button
						className='inline-flex justify-center left w-40 rounded-md bg-blue-500 hover:bg-blue-400
                        p-2 shadow-lg hover:cursor-pointer
                        place-items-center gap-2'
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						id='options-menu'
						aria-haspopup='true'
						aria-expanded='true'
					>
                        <Icon icon={selectedPage?.icon!} height={20} width={20} />
						{selectedPage?.name || 'Select Page'}
					</button>
				</div>
				{open && (
					<div
						className='absolute bottom-10 p-0.5 w-40 rounded-md bg-blue-600 opacity-95'
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
					>
						<div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
							{pages?.map((page) => (
								<div key={page.id} onClick={() => handleSelect(page)}>
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
