import { Project } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type Props = {
	projects: Project[];
	selectedSkill: string;
	handleSkillClick: (skill: string) => void;
};

const ProjectSkillFilter = ({ projects, selectedSkill, handleSkillClick }: Props) => {
	return (
		<div className='mt-5 flex flex-wrap gap-2 space-x-2 justify-center'>
			{Array.from(new Set(projects.flatMap((project) => project.skills.map((skill) => skill.name)))).map(
				(skillName, index) => {
					// Find the first matching skill object for the current skill name
					const matchingSkill = projects.flatMap((project) => project.skills).find((skill) => skill.name === skillName);

					return (
						<button
							key={index}
							onClick={() => handleSkillClick(skillName)}
							className={`px-3 py-2 rounded-md text-sm font-semibold shadow-md transition duration-500 ease-in-out transform hover:scale-105 ${
								selectedSkill === skillName ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-700'
							}`}
						>
							{matchingSkill && (
								<div className='flex place-items-center'>
									<Icon icon={matchingSkill.icon} className='mr-1' width={30} height={30} />
									<span className='hidden md:inline'>{skillName}</span>
								</div>
							)}
						</button>
					);
				}
			)}
		</div>
	);
};

export default ProjectSkillFilter;
