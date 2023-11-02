import { Project } from '@/types';
import Image from 'next/image';
import React from 'react';

type ProjectModalProps = {
	modalOpen: boolean;
	setModalOpen: (modalOpen: boolean) => void;
	selectedProject: Project | undefined;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ modalOpen, setModalOpen, selectedProject }) => {
	return (
		<div>
			{modalOpen && selectedProject && (
				<div
					className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-10'
					onClick={() => setModalOpen(false)} // Close modal when clicking outside
				>
					<div
						className='bg-gray-800 p-5 rounded-md relative max-w-2xl min-w-md min-h-[400px]'
						onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
					>
						<button className='absolute top-2 right-2' onClick={() => setModalOpen(false)}>
							X
						</button>
						<Image
							className='w-full h-32 object-cover rounded-md'
							src={selectedProject?.image.modalImage}
							alt={selectedProject?.title}
							width={1024}
							height={768}
						/>
						<h3 className='text-lg mt-2'>{selectedProject?.title}</h3>
						<p className='text-sm'>{selectedProject?.description}</p>
						<div className='flex space-x-2 mt-3'>
							<button className='px-3 py-2 rounded-md bg-green-500 text-white'>Live Code</button>
							<button className='px-3 py-2 rounded-md bg-blue-500 text-white'>Github Code</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectModal;
