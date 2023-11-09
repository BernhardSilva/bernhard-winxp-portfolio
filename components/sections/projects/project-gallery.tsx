import { Project } from '@/types';
import ProjectCard from './project-card';

type ProjectProps = {
	projects: Project[];
	handleProjectClick: (project: Project) => void;
};

const ProjectGallery = ({ projects, handleProjectClick }: ProjectProps) => {
	return (
		<div className='text-center text-xl'>
			<div className='flex flex-wrap gap-4 justify-center mt-5'>
				{projects.map((project) => (
					<ProjectCard key={project._id} handleProjectClick={handleProjectClick} project={project} />
				))}
			</div>
		</div>
	);
};

export default ProjectGallery;
