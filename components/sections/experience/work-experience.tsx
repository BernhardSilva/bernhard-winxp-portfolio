import { WorkExperience as WorkExperienceType } from '@/types';
import WorkExperienceSkills from './skills';

type WorkExperienceProps = {
	workExperience: WorkExperienceType[];
};

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
	return (
		<>
			{workExperience.map((work, index) => (
				<div
					key={index}
					className={`mb-5 p-5 rounded-md bg-white dark:bg-gray-800 transition duration-500 ease-in-out transform hover:scale-105`}
				>
					<h3 className='text-xl font-bold'>{work.title}</h3>
					<p className='text-gray-400'>{work.date}</p>
					<p>{work.company}</p>
					<p className='text-sm mt-2'>{work.description}</p>
					<WorkExperienceSkills skills={work.skills} />
				</div>
			))}
		</>
	);
};

export default WorkExperience;
