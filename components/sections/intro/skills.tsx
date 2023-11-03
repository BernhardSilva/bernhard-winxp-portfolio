import { Skill } from '@/types';
import React from 'react';

type SkillsProp = {
	skills: Skill[];
};

const SkillsComponent = ({ skills }: SkillsProp) => {
	return (
		<div className='p-5 text-center'>
			<h2 className='text-2xl font-bold mb-5'>
				I specialize in the development of Web applications with different technologies.
			</h2>
			<ul className='flex space-x-3'>
				{skills.map((skill, index) => (
					<li key={index} className='bg-gray-700 px-3 py-1 rounded-md'>
						{skill.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsComponent;
