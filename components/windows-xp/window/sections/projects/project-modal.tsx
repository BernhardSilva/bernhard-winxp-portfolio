import ButtonCloseWindows from '@/components/windows-xp/buttons/button-close-windows';
import { Project } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React from 'react';

type ProjectModalProps = {
	isModalOpen: boolean;
	closeModal: () => void;
	selectedProject: Project | undefined;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ isModalOpen, closeModal, selectedProject }) => {
	return (
		<div className='w-full h-full'>
			{isModalOpen && selectedProject && (
				<div
					className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10'
					onClick={closeModal} // Close modal when clicking outside
				>
					<div
						className='bg-slate-100 p-5 rounded-md relative max-w-2xl min-w-md min-h-[400px]'
						onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
					>
						<ButtonCloseWindows closeHandler={closeModal} className='' />

						<div className='bg-slate-200 rounded-md p-10'>
							<Image
								className='w-full h-32 object-cover rounded-md'
								src={selectedProject?.image.modalImage}
								alt={selectedProject?.title}
								width={500}
								height={300}
							/>
							<h3 className='text-lg mt-2'>{selectedProject?.title}</h3>
							<p className='text-sm'>{selectedProject?.description}</p>
							<p className='text-sm'>{selectedProject?.skills.map((item) => item.name)}</p>
							<div className='flex space-x-2 mt-3'>
								<button className='px-3 py-2 rounded-md bg-green-500 text-white'>Live Code</button>
								<button className='px-3 py-2 rounded-md bg-blue-500 text-white'>Github Code</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
	{
		/* {modalOpen && selectedProject && (
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
							<button className='px-3 py-2 rounded-md bg-red-500 text-white' onClick={() => setModalOpen(!modalOpen)}>
								Close
							</button>
							<button className='px-3 py-2 rounded-md bg-green-500 text-white'>Live Project</button>
						</div>
					</div>
				</div>
			)}
		</div>
	); */
	}
};

export default ProjectModal;
