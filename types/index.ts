import { IconifyIcon } from '@iconify/react/dist/iconify.js';
import { ReactElement } from 'react';

export type Project = {
	id: string;
	title: string;
	description: string;
	image: Image;
	skills: string[];
};

export type Skill = {
	id: string;
	name: string;
	icon: string;
};

export type WorkExperience = {
	title: string;
	date: string;
	company: string;
	description: string;
};

export type Image = {
	id: string;
	thumbnail: string;
	modalImage: string;
};

export type Tag = {
	id: string;
	name: string;
};

export type Page = {
	name: string;
	id: string;
	component: ReactElement<any, any>;
	icon: string | IconifyIcon;
	isOpen: boolean;
};
