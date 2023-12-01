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
	const { pages, addNewPage, setActivePageId, openPage, openedPages } = usePageStore((state) => state);
	const [filteredPages, setFilteredPages] = useState<PageState[]>([]);
	const { isMobile } = useWindowsStore((state) => state);

	useEffect(() => {
		if (openedPages.length === 0) {
			openPage('intro');
		}
	}, [setActivePageId, openPage, openedPages]);

	useEffect(() => {
		const desktopPages = ['tictactoe', 'paint', 'secret', 'secret-password'];
		const filteredMobilePages = pages.filter((page) => !desktopPages.includes(page.id));

		isMobile ? setFilteredPages(filteredMobilePages) : setFilteredPages(pages);
	}, [isMobile, pages]);
	useKonamiCode(() => addNewPage(secretPage));

	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		// Function to update the height
		const updateHeight = () => {
			setWindowHeight(window.innerHeight);
		};

		// Update the height when the component mounts
		updateHeight();

		// Update the height whenever the window resizes
		window.addEventListener('resize', updateHeight);

		// Clean up event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', updateHeight);
		};
	}, []);
	return (
		<div className='relative flex flex-col' style={{ height: !windowHeight ? 'h-screen' : windowHeight }}>
			<main className='flex-grow'>
				<Desktop>
					{filteredPages?.some((page) => page.id === 'secret') && <SecretWallpaper />}
					{!isMobile && <Files />}
					<WindowsPages pages={filteredPages} />
				</Desktop>
			</main>
			<footer className='h-[45px]'>
				<TaskBar pages={filteredPages} />
			</footer>
		</div>
	);
};

export default Windows;
