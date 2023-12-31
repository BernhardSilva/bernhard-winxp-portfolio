import ImageSkeleton from '@/components/ui/image-skeleton';
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
			key={project._id}
			className='p-3 border-2 border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 rounded-md cursor-pointer 
			transition duration-500 ease-in-out transform hover:scale-105 max-w-[500px]'
			onClick={() => handleProjectClick(project)}
		>
			<ImageSkeleton
				image={
					<Image
						className='max-h-[300px] w-[300px] rounded-md object-cover mb-2'
						src={project.image.thumbnail}
						alt={project.title}
						width={300}
						height={300}
					/>
				}
				imageLoaded={!!project.image.thumbnail}
				width={300}
				height={200}
			/>

			<h3 className='text-lg font-bold'>{project.title}</h3>
			<p className='text-sm text-gray-400'>{project.tags.join(' - ')}</p>
		</div>
	);
};

export default ProjectCard;
