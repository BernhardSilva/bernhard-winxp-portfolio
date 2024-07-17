import ContactForm from './form';

const Contact = () => {
	return (
		<div
			className='h-screen w-full text-white flex justify-center place-items-center rounded-md dark:opacity-90'
			style={{
				backgroundImage: `url(${'/images/contact/contact-background.png'})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<ContactForm />
		</div>
	);
};

export default Contact;
