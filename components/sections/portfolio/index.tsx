import { mockUser } from '@/mock/mock-data';
import Education from './education';
import WorkExperience from './work-experience';
import Certificates from './certificates';

const Portfolio = () => {
	//TODO FETCH USER DATA

	return (
		<section id='portfolio'>
			<div className='bg-black text-white p-10 flex flex-col items-center'>
				<h1 className='text-4xl font-bold mb-10 text-center'>My Portfolio</h1>
				<div className='w-full max-w-2xl'>
					<WorkExperience workExperience={mockUser.workExperience} />
					<Education education={mockUser.education} />
					<Certificates certificates={mockUser.certificates} />
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
