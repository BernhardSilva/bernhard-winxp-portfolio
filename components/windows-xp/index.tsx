'use client';
import { pagesData, secretPage } from '@/app/pages-data';
import { useClickOutside } from '@/hooks/useClickOuside';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { Page } from '@/types';
import { useState } from 'react';
import Desktop from './desktop';
import Files from './files';
import SecretWallpaper from './secret';
import TaskBar from './taskbar';
import WindowsPages from './window';

const Windows = () => {
	// useCustomAudio('/sounds/windows-xp/windows-xp-startup.mp3', 0.1);
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
		<>
			<Desktop>
				{pages.some((page) => page.id === 'secret') && <SecretWallpaper />}
				<Files />
				<WindowsPages
					pages={pages}
					activePageId={activePageId}
					handlePageClick={handlePageClick}
					handlePageClose={handlePageClose}
				/>
			</Desktop>
			<TaskBar
				handlePageClick={handlePageClick}
				handlePageClose={handlePageClose}
				handleStartClick={handleStartClick}
				isOpenClickOutside={isOpenClickOutside}
				elementRef={elementRef}
				pages={pages}
			/>
		</>
	);
};

export default Windows;
