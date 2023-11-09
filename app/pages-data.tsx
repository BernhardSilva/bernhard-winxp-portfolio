import Blogs from '@/components/sections/blogs';
import Contact from '@/components/sections/contact';
import Explorer from '@/components/sections/explorer';
import Intro from '@/components/sections/intro';
import Paint from '@/components/sections/paint';
import Portfolio from '@/components/sections/portfolio';
import Projects from '@/components/sections/projects';
import SecretPage from '@/components/sections/secret';
import Servicies from '@/components/sections/services';
import Tetris from '@/components/sections/tetris';
import TicTacToe from '@/components/sections/tictactoe';

export const pagesData = [
	{ id: 'intro', name: 'Intro', component: <Intro />, icon: 'fa6-brands:dev', isOpen: false },
	{
		id: 'portfolio',
		name: 'Portfolio',
		component: <Portfolio />,
		icon: 'game-icons:skills',
		isOpen: false
	},
	{
		id: 'projects',
		name: 'Projects',
		component: <Projects />,
		icon: 'zondicons:portfolio',
		isOpen: false
	},
	{
		id: 'services',
		name: 'Services',
		component: <Servicies />,
		icon: 'mingcute:code-fill',
		isOpen: false
	},
	{
		id: 'contact',
		name: 'Contact',
		component: <Contact />,
		icon: 'ph:phone-fill',
		isOpen: false
	},
	{
		id: 'blogs',
		name: 'Blogs',
		component: <Blogs />,
		icon: 'grommet-icons:blog',
		isOpen: false
	},
	{
		id: 'explorer',
		name: 'Explorer',
		component: <Explorer />,
		icon: 'logos:internetexplorer',
		isOpen: false
	},
	{
		id: 'paint',
		name: 'Paint',
		component: <Paint />,
		icon: 'mdi:paint-outline',
		isOpen: false
	},
	{
		id: 'tictactoe',
		name: 'Tic Tac Toe',
		component: <TicTacToe />,
		icon: 'simple-icons:xo',
		isOpen: false
	},
	{
		id: 'tetris',
		name: 'Tetris',
		component: <Tetris />,
		icon: 'fluent:tetris-app-16-regular',
		isOpen: false
	}
];

export const secretPage = {
	id: 'secret',
	name: 'Secret Page',
	component: <SecretPage />,
	icon: 'game-icons:skills',
	isOpen: false
};
