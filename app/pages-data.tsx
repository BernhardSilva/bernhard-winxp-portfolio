import Resume from '@/components/sections/resume';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Intro from '../components/sections/intro';
import Projects from '../components/sections/projects';
import SecretPage from '@/components/secret-page';

export const words = ['Fullstack Developer.', 'Programmer Analyst.'];

export const pagesData = [
	{ id: 'intro', name: 'Intro', component: <Intro />, icon: 'fa6-brands:dev', isOpen: false },
	{
		id: 'about',
		name: 'About',
		component: <About />,
		icon: 'flat-color-icons:about',
		isOpen: false
	},
	{
		id: 'contact',
		name: 'Contact',
		component: <Contact />,
		icon: 'fxemoji:contact',
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
		id: 'resume',
		name: 'Resume',
		component: <Resume />,
		icon: 'game-icons:skills',
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
