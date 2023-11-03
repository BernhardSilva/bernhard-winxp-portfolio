import { WorkExperience } from '../../../types';
import React from 'react';

type WorkExperienceProps = {
	workExperience: WorkExperience[];
};

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
	return (
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
	);
};

export default WorkExperience;
