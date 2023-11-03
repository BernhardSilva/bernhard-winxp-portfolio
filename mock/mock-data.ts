import { Certificate, Image, Project, Skill, Tag, User } from '@/types';

// Mock data for User
export const mockUser: User = {
	_id: '1',
	name: 'Bernhard Silva',
	role: 'Software Engineer',
	profileImage: '/images/profile.jpg',
	languages: ['English', 'Spanish'],
	about: `I'm a software engineer based in the Philippines. I have a passion for web development and love to create for web and mobile devices. I have a strong interest in UI/UX design and love to create for web and mobile devices.`,
	contact: {
		email: 'bernhard.silva@gmail.com',
		phone: '+56946143198',
		location: 'Santiago, Chile',
		website: 'https://portfolio.berspai.com',
		cv: 'https://drive.google.com/file/d/1cIJzQWedKW6JJ6bnGM1xY-6AyOVjZ1Ew/view'
	},
	skills: [
		{
			_id: '201',
			name: 'React',
			icon: 'https://example.com/react-icon.svg'
		},
		{
			_id: '202',
			name: 'JavaScript',
			icon: 'https://example.com/javascript-icon.svg'
		},
		{
			_id: '202',
			name: 'TypeScript',
			icon: 'https://example.com/javascript-icon.svg'
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
	services: [
		{
			name: 'Web Development',
			icon: 'https://example.com/web-development-icon.svg',
			description: 'lorem ipsum'
		},
		{
			name: 'Web Development',
			icon: 'https://example.com/web-development-icon.svg',
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
		description: 'Developed my personal portfolio website to showcase my projects and skills.',
		image: {
			thumbnail: '/images/portfolio/e-cms.webp',
			modalImage: '/images/portfolio/e-cms-modal.webp'
		},
		skills: [
			{
				_id: '201',
				name: 'React',
				icon: 'https://example.com/react-icon.svg'
			},
			{
				_id: '202',
				name: 'JavaScript',
				icon: 'https://example.com/javascript-icon.svg'
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
				_id: '201',
				name: 'React',
				icon: 'https://example.com/react-icon.svg'
			},
			{
				_id: '202',
				name: 'JavaScript',
				icon: 'https://example.com/javascript-icon.svg'
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
				_id: '201',
				name: 'React',
				icon: 'https://example.com/react-icon.svg'
			},
			{
				_id: '202',
				name: 'JavaScript',
				icon: 'https://example.com/javascript-icon.svg'
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
