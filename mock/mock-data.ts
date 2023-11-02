import { Project, Skill, WorkExperience } from '@/types';

export const skills: Skill[] = [
	{
		id: '1',
		name: 'React',
		icon: 'logos:react'
	},
	{
		id: '2',
		name: 'Next',
		icon: ''
	},
	{
		id: '3',
		name: 'Tailwindcss',
		icon: ''
	}
];

export const projects: Project[] = [
	{
		id: '1',
		title: 'VA',
		description:
			'VA, a fintech application for COVAL Finance Services. My responsibilities included creating new REACT modules for the app, developing its services in JAVA, and refactoring existing code to improve performance and maintainability.',
		image: {
			id: '1',
			thumbnail: '/images/portfolio/va.webp',
			modalImage: '/images/portfolio/va-modal.webp'
		},
		skills: ['1', '2', '3']
	},
	{
		id: '2',
		title: 'Project 2',
		description: 'This is a description of Project 2',
		image: {
			id: '1',
			thumbnail: '/images/portfolio/e-cms.webp',
			modalImage: '/images/portfolio/e-cms-modal.webp'
		},
		skills: ['1', '2', '3']
	},
	{
		id: '3',
		title: 'Project 3',
		description: 'This is a description of Project 3',
		image: {
			id: '1',
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: ['1', '2', '3']
	},
	{
		id: '4',
		title: 'Project 4',
		description: 'This is a description of Project 3',
		image: {
			id: '1',
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: ['1', '2', '3']
	},
	{
		id: '5',
		title: 'Project 5',
		description: 'This is a description of Project 3',
		image: {
			id: '1',
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: ['1', '2', '3']
	},
	{
		id: '6',
		title: 'Project 6',
		description: 'This is a description of Project 3',
		image: {
			id: '1',
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: ['1', '2', '3']
	}
];

export const workExperience: WorkExperience[] = [
	{
		title: 'Full-stack Engineer',
		date: 'Apr 2022 - Present',
		company: 'Freelancer, Digital Nomad',
		description: 'lorem ipsum'
	},
	{
		title: 'Full-stack Engineer',
		date: 'Apr 2021 - Jan 2022',
		company: 'Coval',
		description: 'lorem ipsum'
	}
];

export const words = ['Fullstack Developer.', 'Programmer Analyst.'];
