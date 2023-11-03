import { projects } from '@/mock/mock-data';
import { Project } from '@/types';
import { useState } from 'react';
import ProjectGallery from './project-gallery';
import ProjectModal from './project-modal';

const Projects = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project>();

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};
	return (
		<section
			id='projects'
			style={{
				// Add a fixed height to the div, which will trigger a vertical scroll bar
				height: '600px', // You can adjust the height as needed
				overflow: 'auto' // Enable scroll bar when content overflows
			}}
		>
			<ProjectGallery projects={projects} handleProjectClick={handleProjectClick} />
			<ProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedProject={selectedProject} />;
		</section>
	);
};

export default Projects;
