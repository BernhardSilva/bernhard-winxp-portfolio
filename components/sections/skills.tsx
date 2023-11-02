import { Skill } from '@/types';
import React from 'react';

type SkillsProp = {
	skills: Skill[];
};

const Skills = ({ skills }: SkillsProp) => {
	return (
		<section id='skills'>
			<div className='mt-10'>
				<h2 className='text-2xl font-bold mb-5'>Skills</h2>
				<ul className='flex space-x-3'>
					{skills.map((skill, index) => (
						<li key={index} className='bg-gray-700 px-3 py-1 rounded-md'>
							{skill.name}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
