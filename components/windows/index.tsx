// Desktop.js
'use client';
import { useState } from 'react';
import { useCurrentTime } from '../../hooks/useCurrentTime';
import ButtonStartWindows from './button-start-windows';
import MenuList from './menu-list';
import PageWindows from './page-windows';
import { pagesData } from '../../app/pages-data';
import Tab from './tab';

const Desktop = () => {
	const [pages, setPages] = useState(pagesData);
	const [isStartMenuOpen, setStartMenuOpen] = useState(false);
	const currentTime = useCurrentTime();

	const handleStartClick = () => {
		setStartMenuOpen(!isStartMenuOpen);
	};

	const handlePageClick = (pageId: string) => {
		setPages(pages.map((page: any) => (page.id === pageId ? { ...page, isOpen: true } : page)));
	};

	const handlePageClose = (pageId: string) => {
		setPages(pages.map((page: any) => (page.id === pageId ? { ...page, isOpen: false } : page)));
	};

	return (
		<section
			id='windows'
			className='min-h-screen bg-gray-900 text-white'
			style={{ backgroundImage: `url(${'https://images2.alphacoders.com/941/941898.jpg'})`, backgroundSize: 'cover' }}
		>
			<div className='fixed bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-blue-500 p-1 flex items-center justify-between'>
				<div className='flex items-center space-x-4'>
					<ButtonStartWindows handleStartClick={handleStartClick} />
					{isStartMenuOpen && (
						<div className='absolute bottom-12 left-0 rounded-md'>
							<ul className='p-4 bg-white py-5'>
								{pages.map((page) => (
									<MenuList key={page.id} page={page} handleClick={handlePageClick} />
								))}
							</ul>
						</div>
					)}
					<div className='flex items-center space-x-2'>
						{pages
							.filter((page) => page.isOpen)
							.map((page) => (
								<Tab key={page.id} page={page} handlePageClose={handlePageClose} />
							))}
					</div>
				</div>
				<div>
					<div className='text-sm pr-3'>
						{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
					</div>
				</div>
			</div>
			{pages
				.filter((page) => page.isOpen)
				.map((page, index) => (
					<PageWindows key={page.id} page={page} index={index} onClose={handlePageClose} />
				))}
		</section>
	);
};

export default Desktop;
