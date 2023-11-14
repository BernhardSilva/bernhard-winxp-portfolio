import { Certificate, Image, Project, Skill, Tag, User } from '@/types';

// Mock data for User
export const mockUser: User = {
	_id: '1',
	name: 'Bernhard Silva',
	role: 'Software Engineer',
	profileImage: '/images/profile/profile.webp',
	languages: ['English', 'Spanish'],
	typingAnimationText: ['Fullstack Developer.', 'Programmer Analyst.'],
	about: `I'm a software engineer with +6 years of experience in web development.
	I'm passionate about building software that helps people and makes their lives easier.
	If you want to build your dream project, I'm the right person for you.`,
	contact: {
		email: 'bernhard.silva@gmail.com',
		phone: '56946143198',
		location: 'Santiago, Chile',
		website: 'https://portfolio.berspai.com',
		cv: 'https://drive.google.com/file/d/1cIJzQWedKW6JJ6bnGM1xY-6AyOVjZ1Ew/view',
		socialMedia: [
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/bernhard-silva/',
				icon: 'entypo-social:linkedin-with-circle',
				active: true,
				color: '#0077B5'
			},
			{
				name: 'GitHub',
				url: 'https://github.com/BernhardSilva',
				icon: 'logos:github-icon',
				active: true
			},
			{
				name: 'Twitter',
				url: 'https://twitter.com/bernhard_silva',
				icon: 'logos:twitter',
				active: true
			}
		]
	},
	skills: [
		{
			_id: '199',
			name: 'JavaScript',
			icon: 'logos:javascript'
		},
		{
			_id: '200',
			name: 'Typescript',
			icon: 'logos:typescript-icon-round'
		},
		{
			_id: '201',
			name: 'React',
			icon: 'logos:react'
		},
		{
			_id: '202',
			name: 'NextJS',
			icon: 'logos:nextjs-icon'
		},
		{
			_id: '203',
			name: 'Redux',
			icon: 'devicon:redux'
		},
		{
			_id: '204',
			name: 'NodeJS',
			icon: 'logos:nodejs'
		},
		{
			_id: '205',
			name: 'NestJS',
			icon: 'logos:nestjs'
		},
		{
			_id: '206',
			name: 'Apollo GraphQL',
			icon: 'skill-icons:apollo'
		},
		{
			_id: '207',
			name: 'ExpressJS',
			icon: 'simple-icons:express'
		},
		{
			_id: '208',
			name: 'TailwindCSS',
			icon: 'logos:tailwindcss-icon'
		},
		{
			_id: '209',
			name: 'Bootstrap',
			icon: 'devicon:bootstrap'
		},
		{
			_id: '210',
			name: 'CSS',
			icon: 'logos:css-3'
		},
		{
			_id: '211',
			name: 'Sass',
			icon: 'skill-icons:sass'
		},
		{
			_id: '212',
			name: 'MaterialUI',
			icon: 'devicon:materialui'
		},
		{
			_id: '213',
			name: 'Ant Design',
			icon: 'devicon:antdesign'
		},
		{
			_id: '214',
			name: 'Prisma',
			icon: 'logos:prisma'
		},
		{
			_id: '215',
			name: 'MongoDB',
			icon: 'devicon:mongodb'
		},
		{
			_id: '216',
			name: 'MySQL',
			icon: 'devicon:mysql'
		},
		{
			_id: '217',
			name: 'PostgreSQL',
			icon: 'devicon:postgresql'
		},
		{
			_id: '218',
			name: 'SQLServer',
			icon: 'simple-icons:microsoftsqlserver'
		},
		{
			_id: '219',
			name: 'Firestore',
			icon: 'vscode-icons:file-type-firestore'
		},
		{
			_id: '220',
			name: 'Java',
			icon: 'logos:java'
		},
		{
			_id: '221',
			name: 'SpringBoot',
			icon: 'devicon:spring'
		},
		{
			_id: '222',
			name: 'Vercel',
			icon: 'logos:vercel-icon'
		},
		{
			_id: '224',
			name: 'Vite',
			icon: 'skill-icons:vite-light'
		}
	],
	services: [
		{
			name: 'AI',
			icon: '🤖',
			description: 'AI services, chat, chat completition, text to img, video, img to text, etc.'
		},
		{
			name: 'SaaS',
			icon: '🖥️',
			description: 'Software as a Service application development using cutting edge technologies.'
		},
		{
			name: 'SPA',
			icon: '🧑‍💻',
			description: 'Single Page Application development using modern web technologies.'
		},
		{
			name: 'MVP',
			icon: '🚀',
			description: 'Minimum Viable Product development to validate your idea quickly.'
		},
		{
			name: 'Apps End to End',
			icon: '📱',
			description: 'Full-cycle application development, from concept to deployment.'
		},
		{
			name: 'Design',
			icon: '🎨',
			description: 'FIGMA, TAILWINDCSS, SHADCN, MUI, ANTDESIGN, BOOTSTRAP, HTML, CSS, SASS for amazing responsive apps.'
		},
		{
			name: 'Full-Stack Development',
			icon: '💻',
			description: 'Frontend & Backend web development with React and Node.js/Spring Boot.'
		},
		{
			name: 'Project management',
			icon: '📋',
			description: 'Agile methodology based on Scrum and/or Kanban, JIRA, Trello, Slack, Teams.'
		}
	],
	workExperience: [
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
	],
	education: [
		{
			title: 'Bachelor of Science in Computer Science',
			university: 'University of the Philippines',
			degree: 'Bachelor of Science in Computer Science',
			endDate: '2012',
			description:
				'Requirements survey and analysis, software development, applications and/or technological solutions, software quality assurance, database administration, support and system administration using various languages ​​and programming environments.'
		}
	],
	certificates: [
		{
			name: 'React Certification',
			credentialId: 'RC12345',
			credentialUrl: 'https://example.com/react-certificate'
		},
		{
			name: 'JavaScript Mastery',
			credentialId: 'JM67890',
			credentialUrl: 'https://example.com/js-mastery'
		}
	]
};

// Mock data for Project
export const mockProjects: Project[] = [
	{
		_id: '101',
		title: 'Portfolio Website',
		description:
			'Developed my personal portfolio website to showcase my projects and skills.Developed my personal portfolio website to showcase my projects and skills. Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/e-cms.webp',
			modalImage: '/images/portfolio/e-cms-modal.webp'
		},
		skills: [
			{
				_id: '201',
				name: 'React',
				icon: 'logos:react'
			},
			{
				_id: '202',
				name: 'JavaScript',
				icon: 'logos:javascript'
			}
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	},
	{
		_id: '102',
		title: 'Portfolio Website2',
		description: 'Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/va.webp',
			modalImage: '/images/portfolio/va-modal.webp'
		},
		skills: [
			{
				_id: '203',
				name: 'Typescript',
				icon: 'devicon:typescript'
			},
			{
				_id: '204',
				name: 'Redux',
				icon: 'logos:redux'
			}
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	},
	{
		_id: '103',
		title: 'Portfolio Website3',
		description: 'Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: [
			{
				_id: '205',
				name: 'Nextjs',
				icon: 'logos:nextjs-icon'
			},
			{
				_id: '206',
				name: 'Tailwindcss',
				icon: 'skill-icons:tailwindcss-dark'
			}
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	},
	{
		_id: '104',
		title: 'Portfolio Website',
		description: 'Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/e-cms.webp',
			modalImage: '/images/portfolio/e-cms-modal.webp'
		},
		skills: [
			{
				_id: '201',
				name: 'React',
				icon: 'logos:react'
			},
			{
				_id: '202',
				name: 'JavaScript',
				icon: 'logos:javascript'
			}
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	},
	{
		_id: '105',
		title: 'Portfolio Website2',
		description: 'Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/va.webp',
			modalImage: '/images/portfolio/va-modal.webp'
		},
		skills: [
			{
				_id: '203',
				name: 'Typescript',
				icon: 'devicon:typescript'
			},
			{
				_id: '204',
				name: 'Redux',
				icon: 'logos:redux'
			}
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	},
	{
		_id: '106',
		title: 'Portfolio Website3',
		description: 'Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: [
			{
				_id: '205',
				name: 'Nextjs',
				icon: 'logos:nextjs-icon'
			},
			{
				_id: '206',
				name: 'Tailwindcss',
				icon: 'devicon:tailwindcss'
			}
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	}
];

// Mock data for Skill
export const mockSkill: Skill = {
	_id: '201',
	name: 'React',
	icon: 'https://example.com/react-icon.svg'
};

// Mock data for Tag
export const mockTag: Tag = {
	_id: '301',
	name: 'Web Development'
};

// Mock data for Image
export const mockImage: Image = {
	thumbnail: 'https://example.com/image-thumbnail.jpg',
	modalImage: 'https://example.com/image-modal.jpg'
};

// Mock data for Certificate
export const mockCertificate: Certificate = {
	name: 'React Certification',
	credentialId: 'RC12345',
	credentialUrl: 'https://example.com/react-certificate'
};

// You can create more mock data as needed for testing and development
