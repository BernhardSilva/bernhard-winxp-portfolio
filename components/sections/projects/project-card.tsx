import { Project } from '@/types';
import Image from 'next/image';
import React from 'react';

type ProjectProps = {
	project: Project;
	handleProjectClick: (project: Project) => void;
};

const ProjectCard = ({ handleProjectClick, project }: ProjectProps) => {
	return (
		<div
			key={project.id}
			className='bg-gray-700 p-3 rounded-md cursor-pointer hover:bg-gray-600'
			onClick={() => handleProjectClick(project)}
		>
			<Image
				className='w-full h-32 object-cover rounded-md'
				src={project.image.thumbnail}
				alt={project.title}
				width={1024}
				height={768}
			/>
			<h3 className='text-lg mt-2'>{project.title}</h3>
			<p className='text-sm'>{project.description}</p>
		</div>
	);
};

export default ProjectCard;
