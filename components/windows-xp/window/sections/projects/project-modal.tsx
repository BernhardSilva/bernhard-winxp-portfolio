import WindowsCloseButton from '@/components/windows-xp/buttons/windows-close-button';
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
						className='relative rounded-md max-w-2xl min-w-md min-h-[400px] max-h-[80%]'
						onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
					>
						<WindowsCloseButton closeHandler={closeModal} className='absolute top-3 right-3' />
						<div className='bg-white dark:bg-slate-950 rounded-md p-10'>
							<Image
								className='w-full object-cover rounded-md h-[200px]'
								src={selectedProject?.image.modalImage}
								alt={selectedProject?.title}
								width={500}
								height={300}
							/>
							<div className='bg-slate-100 dark:bg-slate-900 p-2 rounded-md mt-3'>
								<h3 className='text-lg mt-2'>{selectedProject?.title}</h3>
								<p className='text-sm'>{selectedProject?.description}</p>
								<div className='flex flex-wrap justify-center gap-2 my-2'>
									{selectedProject?.skills.map((item) => (
										<Icon key={item._id} icon={item.icon} width={30} height={30} className='hover:scale-105' />
									))}
								</div>
							</div>
							<div className='flex space-x-2 mt-3 justify-center'>
								<button className='px-3 py-2 rounded-md bg-green-500 text-white'>Live Code</button>
								<button className='px-3 py-2 rounded-md bg-blue-500 text-white'>Github Code</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectModal;
