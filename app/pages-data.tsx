import Contact from '@/components/sections/contact';
import Intro from '@/components/sections/intro';
import Projects from '@/components/sections/projects';
import Portfolio from '@/components/sections/portfolio';

import Servicies from '@/components/sections/services';
import Blogs from '@/components/sections/blogs';
import SecretPage from '@/components/sections/secret/secret-page';

export const words = ['Fullstack Developer.', 'Programmer Analyst.'];

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
