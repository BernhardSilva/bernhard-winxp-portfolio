import { Project } from '@/types';
import ProjectCard from './project-card';

type ProjectProps = {
	projects: Project[];
	handleProjectClick: (project: Project) => void;
};

const ProjectGallery = ({ projects, handleProjectClick }: ProjectProps) => {
	return (
		<div className='p-5'>
			<h2>PORTFOLIO</h2>
			<h3>Take a look at one of my recent projects.</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} handleProjectClick={handleProjectClick} />
				))}
			</div>
		</div>
	);
};

export default ProjectGallery;
