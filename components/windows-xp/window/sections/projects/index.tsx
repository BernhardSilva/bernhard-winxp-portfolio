import { mockProjects } from '@/mock/mock-data';
import { Project } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ChangeEvent, useState } from 'react';
import ProjectCard from './project-card';
import ProjectModal from './project-modal';

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

	const filteredProjects = mockProjects.filter((project) => {
		const title = project.title.toLowerCase();
		const titleMatchesSearch = title.includes(lowerSearchTerm);
		const titleMatchesSkill = title.includes(lowerSelectedSkill);

		const skillMatchingSearch = project.skills.some((skill) => skill.name.toLowerCase().includes(lowerSearchTerm));
		const skillMatchingSkill = project.skills.some((skill) => skill.name.toLowerCase() === lowerSelectedSkill);

		return (titleMatchesSearch || skillMatchingSearch) && (titleMatchesSkill || skillMatchingSkill);
	});

	return (
		<div className='flex flex-col items-center'>
			{isModalOpen && <div className='z-10' onClick={closeModal} />}
			<div className='relative'>
				<input
					type='text'
					placeholder='Search Projects'
					className='px-3 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white'
					onChange={handleSearch}
				/>
				<button className='absolute right-2 top-2.5'>
					<Icon icon='akar-icons:search' className='text-slate-500 dark:text-gray-200' />
				</button>
			</div>
			<div className='mt-5 flex space-x-2'>
				{Array.from(new Set(mockProjects.flatMap((project) => project.skills.map((skill) => skill.name)))).map(
					(skillName, index) => (
						<button
							key={index}
							onClick={() => handleSkillClick(skillName)}
							className={`px-3 py-2 rounded-md text-sm shadow-md hover:scale-105 ${
								selectedSkill === skillName ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-700'
							}`}
						>
							{skillName}
						</button>
					)
				)}
			</div>
			<div className='flex flex-wrap gap-4 justify-center mt-5'>
				{filteredProjects.map((project) => (
					<ProjectCard key={project._id} handleProjectClick={handleProjectClick} project={project} />
				))}
			</div>
			<ProjectModal isModalOpen={isModalOpen} selectedProject={selectedProject} closeModal={closeModal} />
		</div>
	);
};

export default Projects;
