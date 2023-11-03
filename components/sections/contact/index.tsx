import Image from 'next/image';
import React from 'react';
import wsp from '@/public/images/logos/wsp.webp';
import mail from '@/public/images/logos/mail.webp';

const Contact = () => {
	return (
		<section id='contact'>
			<div className='flex justify-center place-items-center'>
				<div className='flex justify-center items-center gap-10'>
					<Image
						className='cursor-pointer hover:scale-125 transition'
						src={wsp}
						alt='whatsapp'
						width={80}
						height={80}
					/>
					<Image className='cursor-pointer hover:scale-125 transition' src={mail} alt='email' width={80} height={80} />
				</div>
			</div>
		</section>
	);
};

export default Contact;
