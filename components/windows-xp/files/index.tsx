import { passwordPage } from '@/app/pages-data';
import { useTheme } from '@/hooks/useTheme';
import { usePageStore } from '@/stores/page-store';
import File from './file';

type CustomFunctionMap = {
	[key: string]: (() => void) | undefined;
	portfolio: () => void;
	projects: () => void;
	contact: () => void;
	intro: () => void;
	services: () => void;
};

const Files = () => {
	const { openPage, addNewPage, pages } = usePageStore();
	const { theme, toggleTheme } = useTheme();
	const openFile = () => {
		if (!pages.some((page) => page.id === 'secret-password')) {
			addNewPage(passwordPage);
		}
		openPage('secret-password');
	};
	const ids = ['portfolio', 'projects', 'contact', 'intro', 'services'];

	const openPorfolio = () => {
		openPage('portfolio');
	};
	const openContact = () => {
		openPage('contact');
	};
	const openIntro = () => {
		openPage('intro');
	};
	const openServices = () => {
		openPage('services');
	};
	const openProjects = () => {
		openPage('projects');
	};

	const themeToggle = () => {
		toggleTheme();
	};

	const customFunctions: CustomFunctionMap = {
		portfolio: () => openPorfolio(),
		projects: () => openProjects(),
		contact: () => openContact(),
		intro: () => openIntro(),
		services: () => openServices()
	};

	const newPagesData = pages
		.filter((page) => ids.includes(page.id))
		.map((page, index) => ({
			element: page.id,
			text: page.name,
			icon: page.icon,
			color: page.color,
			size: 50,
			initialPosition: { x: 20, y: (index + 2) * 100 + 22 },
			onOpen: customFunctions[page.id] || (() => {})
		}));

	const fileList = [
		{
			element: 'themeToggle',
			text: 'Light/Dark',
			icon: theme === 'dark' ? 'fa-solid:moon' : 'fa-solid:sun',
			className: theme === 'dark' ? 'text-blue-200' : 'text-yellow-500',
			size: 50,
			initialPosition: { x: 20, y: 20 },
			onOpen: () => themeToggle()
		},
		{
			element: 'secret-password',
			text: 'Top Secret',
			icon: 'ph:notepad-bold',
			color: 'text-slate-800 dark:text-slate-200',
			size: 50,
			initialPosition: { x: 20, y: 120 },
			onOpen: () => openFile()
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
