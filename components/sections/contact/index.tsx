import { mockUser } from '@/mock/mock-data';
import ContactForm from './form';

const Contact = () => {
	return (
		<div
			className='h-full w-full text-white flex justify-center items-center place-items-center rounded-md dark:opacity-90'
			style={{
				backgroundImage: `url(${'/images/contact/contact-background.png'})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<ContactForm user={mockUser} />
		</div>
	);
};

export default Contact;
