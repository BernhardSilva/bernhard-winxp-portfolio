import { ReactNode } from "react";

export type User = {
	_id: string;
	name: string;
	role: string;
	profileImage: string;
	languages: string[];
	about: string;
	typingAnimationText: string[];
	contact: Contact;
	skills: Skill[];
	services: Service[];
	workExperience: WorkExperience[];
	education: Education[];
	certificates: Certificate[];
};

export type SocialMedia = {
	name: string;
	url: string;
	icon: string;
	active: boolean;
	color?: string;
};

export type UserUpdate = {
	name?: string;
	role?: string;
	profileImage?: string;
	languages?: string[];
	about?: string;
	contact?: Contact;
	skills?: string[];
	services?: string[];
	workExperience?: WorkExperience[];
	education?: Education[];
	certificates?: Certificate[];
};

export type UserCreate = {
	name: string;
	role: string;
	profileImage?: string;
	languages?: string[];
	about?: string;
	contact: Contact;
	skills: string[];
	services: string[];
	workExperience: WorkExperience[];
	education: Education[];
	certificates: Certificate[];
};

export type Service = {
	name: string;
	icon: string;
	description: string;
};

export type Contact = {
	email: string;
	phone: string;
	location: string;
	website?: string;
	cv?: string;
	socialMedia?: SocialMedia[];
};

export type Education = {
	title: string;
	university: string;
	degree?: string;
	gpa?: string;
	major?: string;
	endDate: string;
	description: string;
};

export type WorkExperience = {
	title: string;
	date: string;
	company: string;
	description: string;
};

export type Project = {
	_id: string;
	title: string;
	description: string;
	liveUrl?: string;
	repoUrl?: string;
	image: Image;
	skills: Skill[];
	tags: string[];
	userId: string;
};

export type Skill = {
	_id: string;
	name: string;
	icon: string;
};

export type Tag = {
	_id: string;
	name: string;
};

export type Image = {
	thumbnail: string;
	modalImage: string;
};

export type Certificate = {
	name: string;
	credentialId: string;
	credentialUrl: string;
};

//this is only for the client side
export type Page = {
	name: string;
	id: string;
	component: ReactNode;
	icon: string;
	color?: string;
};
