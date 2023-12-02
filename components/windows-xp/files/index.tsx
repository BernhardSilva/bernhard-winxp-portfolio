import { passwordPage } from '@/app/pages-data';
import { useTheme } from '@/hooks/useTheme';
import { PageState, usePageStore } from '@/stores/page-store';
import File from './file';

const Files = () => {
	const { openPage, addNewPage, pages, toggleMinimizePage } = usePageStore();
	const { theme, toggleTheme } = useTheme();
	const openFile = (page: PageState) => {
		if (!pages.some((page) => page.id === 'secret-password')) {
			addNewPage(passwordPage);
		}
		openPage('secret-password');
		if (page.isMinimized) toggleMinimizePage(page.id);
	};
	const ids = ['experience', 'projects', 'contact', 'intro', 'services', 'explorer', 'cv'];

	const themeToggle = () => {
		toggleTheme();
	};
	const openById = (id: string) => {
		openPage(id);
	};

	const handleOpen = (page: PageState) => {
		openById(page.id);
		if (page.isMinimized) toggleMinimizePage(page.id);
	};

	const newPagesData = pages
		.filter((page) => ids.includes(page.id))
		.map((page, index) => ({
			element: page.id,
			text: page.name,
			icon: page.icon,
			color: page.color,
			size: 50,
			initialPosition: { x: 20, y: index * 100 + 20 },
			onOpen: () => handleOpen(page)
		}));

	const fileList = [
		{
			element: 'themeToggle',
			text: 'Light/Dark',
			icon: theme === 'dark' ? 'fa-solid:moon' : 'fa-solid:sun',
			className: theme === 'dark' ? 'text-blue-100' : 'text-yellow-500',
			size: 50,
			initialPosition: { x: 150, y: 20 },
			onOpen: () => themeToggle()
		},
		{
			element: 'secret-password',
			text: 'Top Secret',
			icon: 'ph:notepad-bold',
			color: pages.find((page) => page.id === 'secret-password')?.color,
			size: 50,
			initialPosition: { x: 150, y: 120 },
			onOpen: () => openFile(pages.find((page) => page.id === 'secret-password')!)
		},
		...newPagesData
	];

	return (
		<div className='cursor-pointer'>
			{fileList.map((file) => {
				return <File key={file.element} file={file} />;
			})}
		</div>
	);
};

export default Files;
