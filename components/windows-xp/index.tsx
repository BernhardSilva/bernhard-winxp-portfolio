'use client';
import { secretPage } from '@/app/pages-data';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { usePageStore } from '@/stores/page-store';
import Desktop from './desktop';
import Files from './files';
import SecretWallpaper from './secret';
import TaskBar from './taskbar';
import WindowsPages from './window';

const Windows = () => {
	// useCustomAudio('/sounds/windows-xp/windows-xp-startup.mp3', 0.1);
	const { pages, addSecretPage } = usePageStore((state) => state);
	useKonamiCode(() => addSecretPage(secretPage));
	return (
		<>
			<Desktop>
				{pages.some((page) => page.id === 'secret') && <SecretWallpaper />}
				<Files />
				<WindowsPages pages={pages} />
			</Desktop>
			<TaskBar pages={pages} />
		</>
	);
};

export default Windows;
