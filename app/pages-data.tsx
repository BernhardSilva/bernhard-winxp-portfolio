import Contact from '@/components/sections/contact';
import Cv from '@/components/sections/cv';
import Explorer from '@/components/sections/explorer';
import Intro from '@/components/sections/intro';
import Notepad from '@/components/sections/notepad';
import Paint from '@/components/sections/paint';
import Portfolio from '@/components/sections/portfolio';
import Projects from '@/components/sections/projects';
import SecretPage from '@/components/sections/secret';
import Servicies from '@/components/sections/services';
import TicTacToe from '@/components/sections/tictactoe';
import { PageState } from '@/stores/page-store';
import { Page } from '@/types';

export const pagesData: Page[] = [
	{
		id: 'intro',
		name: 'Intro',
		component: <Intro />,
		icon: 'fa6-brands:dev',
		color: 'text-blue-600'
	},
	{
		id: 'portfolio',
		name: 'Portfolio',
		component: <Portfolio />,
		icon: 'game-icons:skills',
		color: 'text-pink-800'
	},
	{
		id: 'projects',
		name: 'Projects',
		component: <Projects />,
		icon: 'zondicons:portfolio',
		color: 'text-yellow-800'
	},
	{
		id: 'services',
		name: 'Services',
		component: <Servicies />,
		color: 'text-yellow-500',
		icon: 'mingcute:code-fill'
	},
	{
		id: 'contact',
		name: 'Contact',
		component: <Contact />,
		color: 'text-green-500',
		icon: 'fa:mobile'
	},
	{
		id: 'cv',
		name: 'CV',
		component: <Cv />,
		color: 'text-red-600',
		icon: 'teenyicons:pdf-solid'
	},
	{
		id: 'notepad',
		name: 'Notepad',
		component: <Notepad />,
		color: 'text-slate-800 dark:text-slate-200',
		icon: 'ph:notepad-bold'
	},
	{
		id: 'explorer',
		name: 'Explorer',
		component: <Explorer />,
		icon: 'logos:internetexplorer'
	},
	{
		id: 'paint',
		name: 'Paint',
		component: <Paint />,
		color: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full',
		icon: 'mdi:paint-outline'
	},
	{
		id: 'tictactoe',
		name: 'Tic Tac Toe',
		component: <TicTacToe />,
		color: 'bg-gradient-to-r from-green-400 to-blue-500 rounded-full',
		icon: 'simple-icons:xo'
	}
	// {
	// 	id: 'tetris',
	// 	name: 'Tetris',
	// 	component: <Tetris />,
	// 	color: 'bg-gradient-to-r from-red-400 via-slate-500 to-blue-500 rounded-full',
	// 	icon: 'fluent:tetris-app-16-regular'
	// }
];

export const secretPage: PageState = {
	id: 'secret',
	name: 'Secret Page',
	component: <SecretPage />,
	icon: 'eos-icons:secret',
	color: 'text-black dark:text-white',
	isOpen: true,
	isMinimized: false
};

export const passwordPage: PageState = {
	id: 'secret-password',
	name: 'Top Secret',
	component: <Notepad textMessage='Press ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️ to activate my secret password 🤫.' />,
	color: 'text-white',
	icon: 'ph:notepad-bold',
	isOpen: true,
	isMinimized: false,
	isNewPage: true
};
