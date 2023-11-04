import { Education } from '@/types';
import React from 'react';

type EducationProps = {
	education: Education[];
};

const Education = ({ education }: EducationProps) => {
	return (
		<>
			<h2 className='text-2xl font-bold mb-5 mt-10'>Education</h2>
			{education.map((edu, index) => (
				<div
					key={index}
					className='mb-5 p-5 rounded-md bg-gray-800 transition-all duration-500 ease-in-out transform hover:scale-105'
				>
					<h3 className='text-xl font-bold'>{edu.title}</h3>
					<p className='text-gray-400'>{edu.endDate}</p>
					<p>{edu.university}</p>
					<p className='text-sm mt-2'>{edu.description}</p>
				</div>
			))}
		</>
	);
};

export default Education;
