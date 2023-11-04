'use client';
import { useClickOutside } from '@/hooks/useClickOuside';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { Page } from '@/types';
import { useState } from 'react';
import { pagesData, secretPage } from '../../app/pages-data';
import Desktop from './desktop';
import TaskBar from './taskbar';
import PageWindows from './window';

const Windows = () => {
	const [pages, setPages] = useState(pagesData.map((page, index) => (index === 0 ? { ...page, isOpen: true } : page))); //this is for the app, not the user
	const [activePageId, setActivePageId] = useState('');

	const { elementRef, isOpenClickOutside, setIsOpenClickOutside } = useClickOutside(false);

	const addSecretPage = () => {
		setPages((prevPages) => [...prevPages, secretPage]);
	};
	useKonamiCode(addSecretPage);

	const handleStartClick = () => {
		setIsOpenClickOutside(!isOpenClickOutside);
	};

	const handlePageClick = (pageId: string) => {
		setPages(pages.map((page: Page) => (page.id === pageId ? { ...page, isOpen: true } : page)));
		setActivePageId(pageId);
	};

	const handlePageClose = (pageId: string) => {
		setPages(pages.map((page: Page) => (page.id === pageId ? { ...page, isOpen: false } : page)));
	};

	return (
		<Desktop>
			<TaskBar
				handlePageClick={handlePageClick}
				handlePageClose={handlePageClose}
				handleStartClick={handleStartClick}
				isOpenClickOutside={isOpenClickOutside}
				elementRef={elementRef}
				pages={pages}
			/>
			{pages
				.filter((page) => page.isOpen)
				.map((page, index) => (
					<div key={page.id} onClick={() => handlePageClick(page.id)}>
						<PageWindows page={page} index={index} onClose={handlePageClose} isActive={page.id === activePageId} />
					</div>
				))}
		</Desktop>
	);
};

export default Windows;
