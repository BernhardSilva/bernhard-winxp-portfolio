// Menu.js
'use client';
import { useState } from 'react';
import { useCurrentTime } from '../../hooks/useCurrentTime';
import MenuItem from './menu-item';
import { pagesData } from './pages-data';
import Tab from './tab';
import WindowPage from './window-page';
import WindowsButton from './windows-button';

const Menu = () => {
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
		<div
			id='background'
			className='min-h-screen bg-gray-900 text-white p-10'
			style={{ backgroundImage: `url(${'https://images2.alphacoders.com/941/941898.jpg'})`, backgroundSize: 'cover' }}
		>
			<div className='fixed bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-blue-500 p-1 flex items-center justify-between'>
				<div className='flex items-center space-x-4'>
					<WindowsButton handleStartClick={handleStartClick} />
					{isStartMenuOpen && (
						<div className='absolute bottom-10 left-0 bg-gray-700 rounded-md shadow-lg'>
							<ul>
								{pages.map((page) => (
									<MenuItem key={page.id} page={page} onClick={handlePageClick} />
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
				<div className='bg-blue-400 w-1/12'>
					<div className='text-sm pr-2'>
						{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
					</div>
				</div>
			</div>
			{pages
				.filter((page) => page.isOpen)
				.map((page, index) => (
					<WindowPage key={page.id} page={page} index={index} onClose={handlePageClose} />
				))}
		</div>
	);
};

export default Menu;
