import LinkButton from '@/components/buttons/link-button';
import Tooltip from '@/components/ui/tooltip';
import WindowsCloseButton from '@/components/windows-xp/buttons/windows-close-button';
import { Project } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React from 'react';

type ProjectModalProps = {
	isModalOpen: boolean;
	closeModal: () => void;
	selectedProject: Project | null;
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
						className='relative rounded-md max-w-full sm:max-w-2xl sm:h-auto'
						onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
					>
						<WindowsCloseButton closeHandler={closeModal} className='absolute top-3 right-3' />
						<div className='bg-white dark:bg-slate-950 rounded-lg p-10'>
							<div className='relative max-w-full sm:max-w-[585px] h-[200px]'>
								<Image
									className=' object-cover w-full h-full sm:rounded-md'
									src={selectedProject?.image.modalImage}
									alt={selectedProject?.title}
									sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, cover'
									fill
								/>
							</div>
							<div className='bg-slate-100 dark:bg-slate-800 p-2 rounded-md mt-3'>
								<h3 className='text-lg mt-2'>{selectedProject?.title}</h3>
								<p className='text-sm py-3'>{selectedProject?.description}</p>
								<div className='flex flex-wrap justify-center gap-2 my-2'>
									{selectedProject?.skills.map((item) => (
										<Tooltip text={item.name} key={item._id}>
											<Icon icon={item.icon} width={30} height={30} className='hover:scale-105' />
										</Tooltip>
									))}
								</div>
							</div>
							<div className='flex flex-wrap gap-2 mt-3 justify-center'>
								{selectedProject.liveLinks?.map((link, index) => (
									<LinkButton
										key={index}
										text={`${index === 0 ? 'Client' : selectedProject._id === '101' ? 'CMS' : 'Server'}`}
										color='bg-blue-600 hover:bg-blue-500'
										link={selectedProject.liveLinks ? link : ''}
										icon='zondicons:play-outline'
									/>
								))}
								{selectedProject.repoLinks?.map((link, index) => (
									<LinkButton
										key={link}
										text={`${index === 0 ? 'Client' : selectedProject._id === '101' ? 'CMS' : 'Server'}`}
										color='bg-gray-800 hover:bg-gray-500'
										link={selectedProject.liveLinks ? link : ''}
										icon='mdi:github'
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectModal;
