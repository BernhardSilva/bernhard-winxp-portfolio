'use client';
import { useClickOutside } from '@/hooks/useClickOuside';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { Page } from '@/types';
import { useState } from 'react';
import { pagesData } from '../../app/pages-data';
import { useCurrentTime } from '../../hooks/useCurrentTime';
import SecretPage from '../secret-page';
import ButtonStartWindows from './button-start-windows';
import MenuList from './menu-list';
import PageWindows from './page-windows';
import Tab from './tab';

const Desktop = () => {
	const [pages, setPages] = useState(pagesData.map((page, index) => (index === 0 ? { ...page, isOpen: true } : page))); //this is for the app, not the user
	const [activePageId, setActivePageId] = useState('');
	const currentTime = useCurrentTime();

	const { elementRef, isOpen, setIsOpen } = useClickOutside(false);

	const addSecretPage = () => {
		setPages((prevPages) => [
			...prevPages,
			{
				id: 'secret',
				name: 'Secret Page',
				component: <SecretPage />,
				icon: 'game-icons:skills',
				isOpen: false
			}
		]);
	};
	useKonamiCode(addSecretPage);

	const handleStartClick = () => {
		setIsOpen(!isOpen);
	};

	const handlePageClick = (pageId: string) => {
		setPages(pages.map((page: Page) => (page.id === pageId ? { ...page, isOpen: true } : page)));
		setActivePageId(pageId);
	};

	const handlePageClose = (pageId: string) => {
		setPages(pages.map((page: Page) => (page.id === pageId ? { ...page, isOpen: false } : page)));
	};

	return (
		<section id='windows'>
			<div
				id='desktop'
				className='min-h-screen bg-gray-900 text-white'
				style={{ backgroundImage: `url(${'https://images2.alphacoders.com/941/941898.jpg'})`, backgroundSize: 'cover' }}
			>
				<div className='fixed bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-blue-500 p-1 flex items-center justify-between'>
					<div id='menu-list' className='flex items-center space-x-4 z-50' ref={elementRef}>
						<ButtonStartWindows handleStartClick={handleStartClick} />
						{isOpen && (
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
									<div key={page.id} onClick={() => handlePageClick(page.id)}>
										<Tab page={page} handlePageClose={handlePageClose} />
									</div>
								))}
						</div>
					</div>
					<div id='clock'>
						<div className='text-sm pr-3'>
							{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
						</div>
					</div>
				</div>
				{pages
					.filter((page) => page.isOpen)
					.map((page, index) => (
						<div key={page.id} onClick={() => handlePageClick(page.id)}>
							<PageWindows page={page} index={index} onClose={handlePageClose} isActive={page.id === activePageId} />
						</div>
					))}
			</div>
		</section>
	);
};

export default Desktop;
