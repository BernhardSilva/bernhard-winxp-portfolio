import { mockProjects } from '@/mock/mock-data';
import { Project } from '@/types';
import { ChangeEvent, useMemo, useState } from 'react';
import ProjectGallery from './project-gallery';
import ProjectModal from './project-modal';
import ProejctSearch from './project-search';
import ProjectSkillFilter from './project-skill-filter';

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedProject, setSelectedProject] = useState<Project>(mockProjects[0]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedSkill, setSelectedSkill] = useState('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleProjectClick = (project: any) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleSkillClick = (skill: any) => {
		!selectedSkill || selectedSkill !== skill ? setSelectedSkill(skill) : setSelectedSkill('');
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const lowerSearchTerm = searchTerm.toLowerCase();
	const lowerSelectedSkill = selectedSkill.toLowerCase();

	const filteredProjects = useMemo(
		() =>
			mockProjects.filter((project) => {
				const title = project.title.toLowerCase();
				const titleMatchesSearch = title.includes(lowerSearchTerm);
				const titleMatchesSkill = title.includes(lowerSelectedSkill);

				const skillMatchingSearch = project.skills.some((skill) => skill.name.toLowerCase().includes(lowerSearchTerm));
				const skillMatchingSkill = project.skills.some((skill) => skill.name.toLowerCase() === lowerSelectedSkill);

				return (titleMatchesSearch || skillMatchingSearch) && (titleMatchesSkill || skillMatchingSkill);
			}),
		[lowerSearchTerm, lowerSelectedSkill]
	);

	return (
		<div className='flex flex-col items-center h-full mt-5'>
			{isModalOpen && <div className='z-10' onClick={closeModal} />}
			<ProejctSearch handleSearch={handleSearch} />
			<ProjectSkillFilter selectedSkill={selectedSkill} projects={mockProjects} handleSkillClick={handleSkillClick} />
			<ProjectGallery projects={filteredProjects} handleProjectClick={handleProjectClick} />
			<ProjectModal isModalOpen={isModalOpen} selectedProject={selectedProject} closeModal={closeModal} />
		</div>
	);
};

export default Projects;
