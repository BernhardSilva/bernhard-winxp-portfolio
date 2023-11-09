import mail from '@/public/images/logos/mail.webp';
import wsp from '@/public/images/logos/wsp.webp';
import Image from 'next/image';
import ContactForm from './form';

const Contact = () => {
	return (
		<section id='contact'>
			<div className='min-h-full text-white flex justify-center items-center p-10'>
				<ContactForm />
				
					{/* <div className='flex justify-center items-center gap-10'>
						<Image
							className='cursor-pointer hover:scale-125 transition'
							src={wsp}
							alt='whatsapp'
							width={80}
							height={80}
						/>
						<Image
							className='cursor-pointer hover:scale-125 transition'
							src={mail}
							alt='email'
							width={80}
							height={80}
						/>
					</div> */}
				</div>
			
		</section>
	);
};

export default Contact;
