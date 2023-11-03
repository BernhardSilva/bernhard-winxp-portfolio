import { mockUser } from '@/mock/mock-data';
import Education from './education';
import Services from './services';
import WorkExperience from './work-experience-section';

const Resume = () => {
	//TODO FETCH USER DATA

	return (
		<section id='resume'>
			<WorkExperience workExperience={mockUser.workExperience} />
			<Education education={mockUser.education} />
			<Services />
		</section>
	);
};

export default Resume;
