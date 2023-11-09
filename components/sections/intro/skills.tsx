import { Skill } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';

type SkillsProp = React.HTMLAttributes<HTMLDivElement> & {
	skills: Skill[];
};

const Skills = ({ skills, ...props  }: SkillsProp) => {
	return (
		<div {...props}>
			<h2 className='text-2xl font-bold mb-5'>Skills</h2>
			<div className='flex flex-wrap justify-center gap-4'>
				{skills.map((skill) => (
					<div
						key={skill._id}
						className={`flex items-center space-x-2 bg-white dark:bg-slate-800 p-3 rounded-md shadow-xl transition duration-500 ease-in-out transform hover:scale-105`}
					>
						<Icon icon={skill.icon} />
						<span className='hidden md:inline'>{skill.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
