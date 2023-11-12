import { mockUser } from '@/mock/mock-data';
import Education from './education';
import WorkExperience from './work-experience';
import Certificates from './certificates';

const Portfolio = () => {
	return (
		<div className='flex flex-col items-center h-full'>
			<h1 className='text-4xl font-bold mb-10 text-center text-blue-600 mt-3'>My Portfolio</h1>
			<div className='max-w-2xl'>
				<WorkExperience workExperience={mockUser.workExperience} />
				<Education education={mockUser.education} />
				<Certificates certificates={mockUser.certificates} />
			</div>
		</div>
	);
};

export default Portfolio;
