import Tooltip from '@/components/ui/tooltip';
import { Skill } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';

type SkillsProp = {
	skills: Skill[];
};

const Skills = ({ skills }: SkillsProp) => {
	return (
		<div className='my-5 max-w-4xl'>
			<h2 className='text-2xl font-bold mb-5'>Skills</h2>
			<div className='flex flex-wrap justify-center gap-4'>
				{skills.map((skill) => (
					<div
						key={skill._id}
						className={`flex items-center space-x-2 bg-white dark:bg-slate-800 p-2 rounded-md shadow-xl transition duration-500 ease-in-out transform hover:scale-105`}
					>
						<Tooltip text={skill.name}>
							<Icon icon={skill.icon} height={35} width={35} />
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
