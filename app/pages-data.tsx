import Blogs from '@/components/windows-xp/window/sections/blogs';
import Contact from '@/components/windows-xp/window/sections/contact';
import Intro from '@/components/windows-xp/window/sections/intro';
import Portfolio from '@/components/windows-xp/window/sections/portfolio';
import Projects from '@/components/windows-xp/window/sections/projects';
import SecretPage from '@/components/windows-xp/window/sections/secret';
import Servicies from '@/components/windows-xp/window/sections/services';

export const pagesData = [
	{ id: 'intro', name: 'Intro', component: <Intro />, icon: 'fa6-brands:dev', isOpen: false },
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
		id: 'portfolio',
		name: 'Portfolio',
		component: <Portfolio />,
		icon: 'game-icons:skills',
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
		name: 'blogs',
		component: <Blogs />,
		icon: 'ph:phone-fill',
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
