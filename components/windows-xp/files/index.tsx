import { useTheme } from '@/context/theme/useTheme';
import File from './file';

const Files = () => {
	const { theme, toggleTheme } = useTheme();
	const openFile = () => {
		alert('⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️');
	};

	const openEplorer = () => {
		alert('explorer opened');
	};

	const themeToggle = () => {
		console.log(theme);
		toggleTheme();
	};

	const fileList = [
		{
			element: 'themeToggle',
			text: 'light/dark',
			icon: theme === 'dark' ? 'fa-solid:moon' : 'fa-solid:sun',
			className: theme === 'light' ? 'text-yellow-500' : 'text-slate-200',
			size: 50,
			initialPosition: { x: 20, y: 20 },
			onOpen: () => themeToggle()
		},
		{
			element: 'secret',
			text: "Dont' open",
			icon: 'bx:file',
			color: '#ffffff',
			size: 50,
			initialPosition: { x: 20, y: 120 },
			onOpen: () => openFile()
		},
		{
			element: 'explorer',
			text: 'Explorer',
			icon: 'fa-brands:internet-explorer',
			color: '#3381f7',
			size: 50,
			initialPosition: { x: 20, y: 220 },
			onOpen: () => openEplorer()
		}
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
