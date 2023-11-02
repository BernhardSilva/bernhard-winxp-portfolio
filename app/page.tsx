import { projects, skills, workExperience } from '@/mock/mock-data';
import Intro from '../components/sections/intro/intro';



const Home = () => {
	return <Intro skills={skills} projects={projects} workExperience={workExperience} />;
};

export default Home;
