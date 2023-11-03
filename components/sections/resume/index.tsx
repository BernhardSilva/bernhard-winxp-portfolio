import Education from './education';
import Services from './services';
import WorkExperience from './work-experience-section';

const Resume = () => {
	return (
		<section id='resume'>
			<WorkExperience />
			<Education />
			<Services />
		</section>
	);
};

export default Resume;
