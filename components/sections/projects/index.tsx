import { mockProjects } from '@/mock/mock-data';
import { Project } from '@/types';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedProject, setSelectedProject] = useState<Project>();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleProjectClick = (project: any) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const filteredProjects = mockProjects.filter(
		(project) =>
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.skills.some((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	return (
		<div className='min-h-full bg-black text-white p-10'>
			{isModalOpen && (
				<div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10' onClick={closeModal} />
			)}
			<div className='relative'>
				<input
					type='text'
					placeholder='Search Projects'
					className='px-3 py-2 rounded-md bg-gray-700 text-white'
					onChange={handleSearch}
				/>
				<button className='absolute right-2 top-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						className='h-5 w-5 text-gray-400'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</button>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
				{filteredProjects.map((project) => (
					<div
						key={project._id}
						className='p-3 border border-red-500 rounded-md cursor-pointer transform hover:scale-105 transition-transform'
						onClick={() => handleProjectClick(project)}
					>
						<Image
							className='w-full max-h-[500px] rounded-md object-cover mb-2'
							src={project.image.thumbnail}
							alt={project.title}
							width={500}
							height={500}
						/>
						<h3 className='text-lg font-bold'>{project.title}</h3>
						<p className='text-sm text-gray-400'>{project.description}</p>
					</div>
				))}
			</div>
			{isModalOpen && selectedProject && (
				<div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20'>
					<div className='bg-white text-black p-5 rounded-md w-full sm:w-auto max-w-lg'>
						<h2 className='text-2xl font-bold mb-3'>{selectedProject.title}</h2>
						<Image
							className='w-full h-64 rounded-md object-cover mb-3'
							src={selectedProject.image.modalImage}
							alt={selectedProject.title}
							width={500}
							height={500}
						/>
						<p className='mb-3'>{selectedProject.description}</p>
						<div className='flex justify-end space-x-2'>
							<button className='px-3 py-2 rounded-md bg-red-500 text-white' onClick={closeModal}>
								Close
							</button>
							<button className='px-3 py-2 rounded-md bg-green-500 text-white'>Live Project</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
// const [modalOpen, setModalOpen] = useState(false);
// const [selectedProject, setSelectedProject] = useState<Project>();

// //TODO: Add a function to fetch select * project by userId

// const handleProjectClick = (project: Project) => {
// 	setSelectedProject(project);
// 	setModalOpen(true);
// };
// return (
// 	<section
// 		id='projects'
// 	>
// 		{/* <ProjectGallery projects={mockProjects} handleProjectClick={handleProjectClick} />
// 		<ProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedProject={selectedProject} />; */}

// 	</section>
// );

export default Projects;
