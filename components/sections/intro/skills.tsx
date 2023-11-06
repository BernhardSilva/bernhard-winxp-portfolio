import { Skill } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';

type SkillsProp = {
	skills: Skill[];
};

const Skills = ({ skills }: SkillsProp) => {
	return (
		<div>
			<h2 className='text-2xl font-bold mb-5'>Skills</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
				{skills.map((skill) => (
					<div key={skill._id} className='flex items-center space-x-2 bg-gray-200 p-3 rounded-md shadow-xl'>
						<Icon icon={skill.icon} />
						<span className='hidden md:inline'>{skill.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
