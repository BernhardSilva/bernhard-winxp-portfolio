import About from '../sections/about';
import Contact from '../sections/contact';
import Education from '../sections/education';
import Intro from '../sections/intro';
import ProjectComponent from '../sections/projects';
import SkillsComponent from '../sections/skills';
import WorkExperience from '../sections/work-experience-section';

export const pagesData = [
	{ name: 'Intro', id: 'intro', component: <Intro /> },
	{
		id: 'education',
		name: 'Education',
		component: <Education />,
		icon: 'fas fa-graduation-cap',
		isOpen: false
	},
	{
		id: 'projects',
		name: 'Projects',
		component: <ProjectComponent />,
		icon: 'fas fa-graduation-cap',
		isOpen: false
	},
	{ id: 'about', name: 'About', component: <About />, icon: 'fas fa-user', isOpen: false },
	{ id: 'skills', name: 'Skills', component: <SkillsComponent />, icon: 'fas fa-code', isOpen: false },
	{
		name: 'Work Experience',
		id: 'work-experience',
		component: <WorkExperience />,
		icon: 'fas fa-briefcase',
		isOpen: false
	},
	{ name: 'Services', id: 'services', component: <div>Services</div>, icon: 'fas fa-briefcase', isOpen: false },
	{
		name: 'Testimonials',
		id: 'testimonials',
		component: <div>Testimonials</div>,
		icon: 'fas fa-briefcase',
		isOpen: false
	},
	{ name: 'Contact', id: 'contact', component: <Contact />, icon: 'fas fa-briefcase', isOpen: false }
];
