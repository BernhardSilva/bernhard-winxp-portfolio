import { passwordPage } from '@/app/pages-data';
import { useTheme } from '@/hooks/useTheme';
import { mockUser } from '@/mock/mock-data';
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
		if (page?.isMinimized) toggleMinimizePage(page.id);
	};

	const ids = ['experience', 'projects', 'contact', 'intro', 'services', 'explorer', 'cv', 'tictactoe', 'paint'];

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
		.map((page) => {
			return {
				element: page.id,
				text: page.name,
				icon: page.icon,
				color: page.color,
				size: 40,
				onOpen: () => handleOpen(page)
			};
		});

	const fileList = [
		{
			element: 'themeToggle',
			text: 'Light/Dark',
			icon: theme === 'dark' ? 'fa-solid:moon' : 'fa-solid:sun',
			className: theme === 'dark' ? 'text-blue-100' : 'text-yellow-500',
			size: 40,
			onOpen: () => themeToggle()
		},
		{
			element: 'secret-password',
			text: 'Top Secret',
			icon: 'ph:notepad-bold',
			color: pages.find((page) => page.id === 'secret-password')?.color,
			size: 40,
			onOpen: () => openFile(pages.find((page) => page.id === 'secret-password')!)
		},
		...(mockUser?.contact?.socialMedia?.map((site) => ({
			element: site.name,
			text: site.name,
			icon: site.icon,
			color: site.color,
			size: 40,
			onOpen: () => window.open(site.url, '_blank')
		})) || []),
		...newPagesData
	];

	const order = [
		'intro',
		'experience',
		'projects',
		'services',
		'contact',
		'cv',
		'services',
		'explorer',
		...(mockUser?.contact?.socialMedia?.map((site) => site.name) || []),
		'tictactoe',
		'paint',
		'themeToggle',
		'secret-password'
	];

	fileList.sort((a, b) => order.indexOf(a.element) - order.indexOf(b.element));

	return (
		<>
			{fileList && fileList.length > 0 && (
				<div className='cursor-pointer grid grid-cols-2 gap-24 max-w-[120px] mt-2 ml-2 z-50'>
					{fileList.map((file) => {
						return <File key={file.element} file={file} />;
					})}
				</div>
			)}
		</>
	);
};

export default Files;
