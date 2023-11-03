import { Project } from '@/types';
import { useState } from 'react';
import ProjectGallery from './project-gallery';
import ProjectModal from './project-modal';
import { mockProjects } from '@/mock/mock-data';

const Projects = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project>();

	//TODO: Add a function to fetch select * project by userId

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};
	return (
		<section
			id='projects'
		>
			<ProjectGallery projects={mockProjects} handleProjectClick={handleProjectClick} />
			<ProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedProject={selectedProject} />;
		</section>
	);
};

export default Projects;
