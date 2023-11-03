import { Education } from '@/types';
import React from 'react';

type EducationProps = {
	education: Education[];
};

const Education = ({ education }: EducationProps) => {
	return (
		<div>
			{education.map((item, index) => {
				return <div key={index}>{item?.title}</div>;
			})}
		</div>
	);
};

export default Education;
