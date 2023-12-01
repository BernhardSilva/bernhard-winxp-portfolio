'use client';
import { secretPage } from '@/app/pages-data';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { PageState, usePageStore } from '@/stores/page-store';
import Desktop from './desktop';
import Files from './files';
import SecretWallpaper from './secret';
import TaskBar from './taskbar';
import WindowsPages from './window';
import { useWindowsStore } from '@/stores/windows-store';
import { useEffect, useState } from 'react';

const Windows = () => {
	// useCustomAudio('/sounds/windows-xp/windows-xp-startup.mp3', 0.1);
	const { pages, addNewPage, setActivePageId, openPage } = usePageStore((state) => state);
	const [filteredPages, setFilteredPages] = useState<PageState[]>([]);
	const { isMobile } = useWindowsStore((state) => state);

	useEffect(() => {
		openPage('intro');
	}, [setActivePageId, openPage]);

	useEffect(() => {
		const desktopPages = ['tictactoe', 'paint', 'secret', 'secret-password'];
		const filteredMobilePages = pages.filter((page) => !desktopPages.includes(page.id));

		isMobile ? setFilteredPages(filteredMobilePages) : setFilteredPages(pages);
	}, [isMobile, pages]);
	useKonamiCode(() => addNewPage(secretPage));
	return (
		<div className='relative flex flex-col h-screen'>
			<main className='flex-grow'>
				<Desktop>
					{filteredPages?.some((page) => page.id === 'secret') && <SecretWallpaper />}
					{!isMobile && <Files />}
					<WindowsPages pages={filteredPages} />
				</Desktop>
			</main>
			<footer className='h-[44px]'>
				<TaskBar pages={filteredPages} />
			</footer>
		</div>
	);
};

export default Windows;
