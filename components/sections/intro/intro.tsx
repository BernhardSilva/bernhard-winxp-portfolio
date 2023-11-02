'use client';
import { Project, Skill, WorkExperience } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import Contact from '../contact';
import ProjectModal from '../projects/project-modal';
import TypingAnimation from './typing-animation';
import Skills from '../skills';

type IntroProps = {
	projects: Project[];
	skills: Skill[];
	workExperience: WorkExperience[];
};

const Intro = ({ projects, skills, workExperience }: IntroProps) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project>();

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};

	return (
		<div className='min-h-screen bg-gray-800 text-white p-10'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold mb-2'>Bernhard</h1>
				<p className='text-xl'>Fullstack Programmer</p>
				<TypingAnimation />
				<p className='text-md text-gray-400 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>

			<div className='mt-10'>
				<h2 className='text-2xl font-bold mb-5'>Work Experience</h2>
				{workExperience.map((work, index) => (
					<div key={index} className='mb-3 bg-gray-700 p-3 rounded-md'>
						<h3 className='text-lg'>{work.title}</h3>
						<p className='text-sm text-gray-400'>{work.date}</p>
						<p className='text-sm text-gray-400'>{work.company}</p>
						<p className='text-sm'>{work.description}</p>
					</div>
				))}
			</div>

			<div className='mt-10'>
				<h2 className='text-2xl font-bold mb-5'>Projects</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{projects.map((project) => (
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
					))}
				</div>
			</div>

			<ProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedProject={selectedProject} />

			<Skills skills={skills} />
			<Contact />
		</div>
	);
};

export default Intro;
