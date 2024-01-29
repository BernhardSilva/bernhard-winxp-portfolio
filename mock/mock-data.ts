import { Certificate, Image, Project, Skill, Tag, User } from '@/types';

// Mock data for User
const email = process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS;
const phone = process.env.NEXT_PUBLIC_PERSONAL_PHONE;

export const mockUser: User = {
	_id: '1',
	name: 'Bernhard Silva',
	role: 'Software Engineer',
	profileImage: '/images/profile/profile.webp',
	languages: ['English', 'Spanish'],
	typingAnimationText: ['Fullstack Developer.', 'Programmer Analyst.'],
	about: `I'm a software engineer with +7 years of experience in web development.
	I'm passionate about building software that helps people and makes their lives easier.
	If you want to build your dream project, I'm the right person for you.`,
	contact: {
		email: email || '',
		phone: phone || '',
		location: 'Santiago, Chile',
		website: 'https://bernhard-winxp.vercel.app',
		cv: '/pdf/bernhard-silva-cv.pdf',
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
		{ _id: '27', name: 'HTML', icon: 'skill-icons:html' },
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
			_id: '224',
			name: 'shadcn/ui',
			icon: 'fluent:card-ui-24-filled'
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
		{ _id: '31', name: 'Oracle', icon: 'simple-icons:oracle' },
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
			_id: '223',
			name: 'Vite',
			icon: 'skill-icons:vite-light'
		},
		{ _id: '12315', name: 'Git', icon: 'devicon:git' },
		{ _id: '28', name: 'Jira', icon: 'logos:jira' }
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
			description:
				`I've collaborated on multiple projects, such as
				the creation of Ecommerce+CMS using Nextjs
				12 and 13 along with TailwindCSS, creation of
				microservices with NestJS, migration from
				REST to GraphQL.`,
			skills: ['4', '7', '8', '17', '10', '3', '19', '12', '14', '16', '27', '29']
		},
		{
			title: 'Full-stack Engineer',
			date: 'Apr 2021 - Jan 2022',
			company: 'Coval · Full-time',
			description:
				"Creation, maintenance of API Rest and Microservices with SPRINGBOOT (JAVA 8) and maintenance, upgrade performance and creation of new modules and features, for projects 'VA' and 'BACKOFFICE VA' with REACT and AntDesign.",
			skills: ['1', '23', '24', '21', '3', '5', '13', '11', '29']
		},
		{
			title: 'Full-stack Engineer',
			date: 'Feb 2020 - Feb 2021',
			company: 'Freelancer',
			description:
				'Creation and optimization of React components + REST APIs and microservices for clients in the real estate industry.',
			skills: ['2', '3', '6', '9', '19', '29']
		},
		{
			title: 'Apps Developer Programmer Analyst',
			date: 'Apr 2018 - Nov 2019',
			company: 'Citi · Full-time',
			description:
				'Analysis, design, development, unit testing, and implementation of assigned internal projects. Integration of continuous integration for several projects.',
			skills: ['23', '27', '12', '1', '24', '21', '29', '30']
		},
		{
			title: 'Android Developer',
			date: 'Feb 2018 - Apr 2018',
			company: 'Haibu Solutions · Full-time',
			description:
				"Developed a native Android app and integrated it with services for the 'Falabella Connect' project, resulting in a 30% improvement in retail mobile sales and a 40% improvement in operational response times.",
			skills: ['23', '29', '30']
		},
		{
			title: 'SOA Engineer',
			date: 'Oct 2017 - Jan 2018',
			company: 'Intermedia Latam Services · Full-time',
			description: 'Creation and maintenance of SOAP and REST services for BNP Paribas Cardif.',
			skills: ['1', '23', '24', '31', '29']
		},
		{
			title: 'CEO & Full Stack Developer',
			date: 'Feb 2017 - Aug 2017',
			company: 'Jaguartu · Self-employed',
			description:
				'Overseeing the basic management of the start-up well as contributing to IT solutions for the internal processes of each client.',
			skills: ['1', '32', '19', '29', '33', '27', '12', '11']
		},
		{
			title: 'Full Stack Developer',
			date: 'Feb 2017 - Aug 2017',
			company: 'CATV Enterprises · Full-time',
			description:
				'I was responsible of the creation of the new IT department and providing solutions and improvements to the internal processes of the company. I worked as a Frontend and Backend developer in the Orion CATV project.',
			skills: ['1', '32', '19', '33', '27', '12', '11']
		}
	],
	education: [
		{
			title: 'Dev Apps Programmer Analyst',
			university: 'Duoc UC',
			degree: 'Bachelor of Science in Computer Science',
			startDate: '2013',
			endDate: '2017',
			description:
				'Requirements survey and analysis, software development, applications and/or technological solutions, software quality assurance, database administration, support and system administration using various languages ​​and programming environments.'
		}
	],
	certificates: [
		{
			name: 'EFSET English Certificate - C2 Proficient',
			credentialId: 'C2 Proficient 84/100',
			credentialUrl: 'https://www.efset.org/cert/ynmS1o'
		},
		{
			name: 'Graph Developer - Associate',
			credentialId: 'b87aef80-5c5a-49ed-a8e6-04fde1535056',
			credentialUrl: 'https://www.apollographql.com/tutorials/certifications/b87aef80-5c5a-49ed-a8e6-04fde1535056'
		}
	]
};

// Mock data for Project
export const mockProjects: Project[] = [
	{
		_id: '101',
		title: 'E-commerce + CMS',
		description:
			'An E-commerce app + CMS created with Nexjs13 routing version, with third-party authentication using the Clerk library.',
		image: {
			thumbnail: '/images/portfolio/e-cms.webp',
			modalImage: '/images/portfolio/e-cms-modal.webp'
		},
		skills: [
			{ _id: '4', name: 'NextJS', icon: 'logos:nextjs-icon' },
			{ _id: '2', name: 'Typescript', icon: 'logos:typescript-icon-round' },
			{ _id: '10', name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
			{ _id: '34', name: 'Clerk', icon: 'arcticons:otp-authenticator' },
			{ _id: '35', name: 'React Hook Forms', icon: 'simple-icons:googleforms' },
			{ _id: '36', name: 'Axios', icon: 'simple-icons:axios' },
			{ _id: '37', name: 'SWR', icon: 'logos:swr' },
			{ _id: '38', name: 'Zustand', icon: 'mingcute:bear-line' },
			{ _id: '19', name: 'MySQL', icon: 'devicon:mysql' },
			{ _id: '17', name: 'Prisma', icon: 'logos:prisma' },
			{ _id: '39', name: 'Zod', icon: 'logos:zod' },
			{ _id: '40', name: 'Eslint', icon: 'logos:eslint' },
			{ _id: '29', name: 'Git', icon: 'devicon:git' },
			{ _id: '25', name: 'Vercel', icon: 'logos:vercel-icon' }
		],
		liveLinks: [
			'https://e-commerce-cms-client.vercel.app/',
			'https://e-commerce-cms-admin.vercel.app/sign-in?redirect_url=https%3A%2F%2Fe-commerce-cms-admin.vercel.app%2F'
		],
		repoLinks: [
			'https://github.com/BernhardSilva/e-commerce-fullstack-nextjs-client',
			'https://github.com/BernhardSilva/e-commerce-fullstack-nextjs'
		],
		tags: ['Web Development', 'Portfolio'],
		userId: '1'
	},
	{
		_id: '102',
		title: 'VA',
		description:
			'VA, a fintech application for COVAL Finance Services. My responsibilities included creating new REACT modules for the app, developing its services in JAVA, and refactoring existing code to improve performance and maintainability.',
		image: {
			thumbnail: '/images/portfolio/va.webp',
			modalImage: '/images/portfolio/va-modal.webp'
		},
		skills: [
			{ _id: '1', name: 'Javascript', icon: 'logos:javascript' },
			{ _id: '23', name: 'Java', icon: 'logos:java' },
			{ _id: '21', name: 'SQLServer', icon: 'simple-icons:microsoftsqlserver' },
			{ _id: '29', name: 'Git', icon: 'devicon:git' },
			{ _id: '3', name: 'React', icon: 'logos:react' },
			{ _id: '5', name: 'Redux', icon: 'devicon:redux' },
			{ _id: '15', name: 'Ant Design', icon: 'devicon:antdesign' },
			{ _id: '13', name: 'Sass', icon: 'skill-icons:sass' },
			{ _id: '11', name: 'Bootstrap', icon: 'devicon:bootstrap' }
		],
		liveLinks: ['https://www.coval.cl/plataforma-va/'],
		repoLinks: [],
		tags: ['Fullstack Development', 'Fintech App'],
		userId: '1'
	},
	{
		_id: '103',
		title: 'Notflix',
		description: 'A Netflix clone app made with Nexjs13, custom form validation, NextAuth and OAuth.',
		image: {
			thumbnail: '/images/portfolio/notflix.webp',
			modalImage: '/images/portfolio/notflix-modal.webp'
		},
		skills: [
			{ _id: '4', name: 'NextJS', icon: 'logos:nextjs-icon' },
			{ _id: '2', name: 'Typescript', icon: 'logos:typescript-icon-round' },
			{ _id: '10', name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
			{ _id: '36', name: 'Axios', icon: 'simple-icons:axios' },
			{ _id: '37', name: 'SWR', icon: 'logos:swr' },
			{ _id: '38', name: 'Zustand', icon: 'mingcute:bear-line' },
			{ _id: '18', name: 'MongoDB', icon: 'devicon:mongodb' },
			{ _id: '40', name: 'Eslint', icon: 'logos:eslint' },
			{ _id: '29', name: 'Git', icon: 'devicon:git' },
			{ _id: '25', name: 'Vercel', icon: 'logos:vercel-icon' }
		],
		liveLinks: ['https://notflix-nextjs.vercel.app/auth'],
		repoLinks: ['https://github.com/BernhardSilva/netflix-clone'],
		tags: ['Fullstack Development', 'Netflix Clone'],
		userId: '1'
	},
	{
		_id: '104',
		title: 'FinanceML',
		description:
			'A finance admin dashboard app made with the MERN stack and Regression, a Machine Learning library used for calculating predictions.',
		image: {
			thumbnail: '/images/portfolio/financeml.webp',
			modalImage: '/images/portfolio/financeml-modal.webp'
		},
		skills: [
			{ _id: '3', name: 'React', icon: 'logos:react' },
			{ _id: '2', name: 'Typescript', icon: 'logos:typescript-icon-round' },
			{ _id: '5', name: 'Redux', icon: 'devicon:redux' },
			{ _id: '14', name: 'MaterialUI', icon: 'devicon:materialui' },
			{ _id: '6', name: 'NodeJS', icon: 'logos:nodejs' },
			{ _id: '9', name: 'Express', icon: 'simple-icons:express' },
			{ _id: '18', name: 'MongoDB', icon: 'devicon:mongodb' },
			{ _id: '40', name: 'Eslint', icon: 'logos:eslint' },
			{ _id: '26', name: 'Vite', icon: 'skill-icons:vite-light' },
			{ _id: '29', name: 'Git', icon: 'devicon:git' }
		],
		tags: ['Fullstack development', 'Finance dashboard'],
		liveLinks: ['https://financeml.vercel.app/'],
		repoLinks: ['https://github.com/BernhardSilva/finance-client', 'https://github.com/BernhardSilva/finance-server'],
		userId: '1'
	}
];

// Mock data for Skill
export const mockSkills: Skill[] = [
	{ _id: '1', name: 'JavaScript', icon: 'logos:javascript' },
	{ _id: '2', name: 'Typescript', icon: 'logos:typescript-icon-round' },
	{ _id: '3', name: 'React', icon: 'logos:react' },
	{ _id: '4', name: 'NextJS', icon: 'logos:nextjs-icon' },
	{ _id: '5', name: 'Redux', icon: 'devicon:redux' },
	{ _id: '6', name: 'NodeJS', icon: 'logos:nodejs' },
	{ _id: '7', name: 'NestJS', icon: 'logos:nestjs' },
	{ _id: '8', name: 'Apollo GraphQL', icon: 'skill-icons:apollo' },
	{ _id: '9', name: 'ExpressJS', icon: 'simple-icons:express' },
	{ _id: '10', name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
	{ _id: '11', name: 'Bootstrap', icon: 'devicon:bootstrap' },
	{ _id: '12', name: 'CSS', icon: 'logos:css-3' },
	{ _id: '13', name: 'Sass', icon: 'skill-icons:sass' },
	{ _id: '14', name: 'MaterialUI', icon: 'devicon:materialui' },
	{ _id: '15', name: 'Ant Design', icon: 'devicon:antdesign' },
	{ _id: '16', name: 'shadcn/ui', icon: 'fluent:card-ui-24-filled' },
	{ _id: '17', name: 'Prisma', icon: 'logos:prisma' },
	{ _id: '18', name: 'MongoDB', icon: 'devicon:mongodb' },
	{ _id: '19', name: 'MySQL', icon: 'devicon:mysql' },
	{ _id: '20', name: 'PostgreSQL', icon: 'devicon:postgresql' },
	{ _id: '21', name: 'SQLServer', icon: 'simple-icons:microsoftsqlserver' },
	{ _id: '22', name: 'Firestore', icon: 'vscode-icons:file-type-firestore' },
	{ _id: '23', name: 'Java', icon: 'logos:java' },
	{ _id: '24', name: 'SpringBoot', icon: 'devicon:spring' },
	{ _id: '25', name: 'Vercel', icon: 'logos:vercel-icon' },
	{ _id: '26', name: 'Vite', icon: 'skill-icons:vite-light' },
	{ _id: '27', name: 'HTML', icon: 'skill-icons:html' },
	{ _id: '28', name: 'Bootstrap', icon: 'devicon:bootstrap' },
	{ _id: '29', name: 'Git', icon: 'devicon:git' },
	{ _id: '30', name: 'Jira', icon: 'logos:jira' },
	{ _id: '31', name: 'Oracle', icon: 'simple-icons:oracle' },
	{ _id: '32', name: 'jQuery', icon: 'devicon:jquery' },
	{ _id: '33', name: 'C#', icon: 'devicon:csharp' },
	{ _id: '34', name: 'Clerk', icon: 'arcticons:otp-authenticator' },
	{ _id: '35', name: 'React Hook Forms', icon: 'simple-icons:googleforms' },
	{ _id: '36', name: 'Axios', icon: 'simple-icons:axios' },
	{ _id: '37', name: 'SWR', icon: 'logos:swr' },
	{ _id: '38', name: 'Zustand', icon: 'mingcute:bear-line' },
	{ _id: '39', name: 'Zod', icon: 'logos:zod' },
	{ _id: '40', name: 'Eslint', icon: 'logos:eslint' }
];

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
