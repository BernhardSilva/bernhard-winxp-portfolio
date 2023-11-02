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
