import { projects } from '@/mock/mock-data';
import { Project } from '@/types';
import { useState } from 'react';
import ProjectGallery from './project-gallery';
import ProjectModal from './project-modal';

const ProjectComponent = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project>();

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};
	return (
		<>
			<ProjectGallery projects={projects} handleProjectClick={handleProjectClick} />
			<ProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedProject={selectedProject} />;
		</>
	);
};

export default ProjectComponent;
