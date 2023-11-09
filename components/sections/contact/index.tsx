import { mockUser } from '@/mock/mock-data';
import ContactForm from './form';

const Contact = () => {
	return (
		<div className='min-h-full text-white flex justify-center items-center p-10 place-items-center'>
			<ContactForm user={mockUser} />
		</div>
	);
};

export default Contact;
