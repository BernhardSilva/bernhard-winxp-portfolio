import Tooltip from '@/components/ui/tooltip';
import { mockSkills } from '@/mock/mock-data';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
	skills: string[];
};

const WorkExperienceSkills = ({ skills }: Props) => {
	const skillsData = skills.map((skillId) => {
		const skill = mockSkills.find(({ _id }) => _id === skillId);
		return skill;
	});

	return (
		<div className='flex gap-2 justify-center my-2 flex-wrap'>
			{skillsData?.map((skill) => (
				<div key={skill?._id}>
					<Tooltip text={skill?.name ? skill.name : ''}>
						<Icon key={skill?._id} icon={skill?.icon ? skill.icon : ''} height={25} width={25} />
					</Tooltip>
				</div>
			))}
		</div>
	);
};

export default WorkExperienceSkills;
