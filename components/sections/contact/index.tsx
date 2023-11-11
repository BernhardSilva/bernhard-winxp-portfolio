import { mockUser } from '@/mock/mock-data';
import ContactForm from './form';

const Contact = () => {
	return (
		<div
			className='min-h-full text-white flex justify-center items-center p-10 place-items-center rounded-md dark:opacity-90'
			style={{
				backgroundImage: `url(${'/images/animated/contact.gif'})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<ContactForm user={mockUser} />
		</div>
	);
};

export default Contact;
