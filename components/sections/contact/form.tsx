import { FormEvent, useState } from 'react';

const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({ email: '', subject: '', message: '' });

	const validateEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const validateForm = () => {
		let newErrors = { email: '', subject: '', message: '' };
		if (!validateEmail(email)) newErrors.email = 'Invalid email address';
		if (!validateEmail(subject)) newErrors.subject = 'Invalid email address';
		if (message === '') newErrors.message = 'Message cannot be empty';
		setErrors(newErrors);
		return !Object.values(newErrors).some((error) => error !== '');
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;
		alert(`Email sent to ${email} with Subject to ${subject} and message: ${message}`);
	};
	return (
		<form onSubmit={handleSubmit} className='w-full max-w-md'>
			<div className='mb-4'>
				<label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='email'>
					Email
				</label>
				<input
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						errors.email && 'border-red-500'
					}`}
					id='email'
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
			</div>
			<div className='mb-4'>
				<label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='subject'>
					Subject
				</label>
				<input
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						errors.subject && 'border-red-500'
					}`}
					id='subject'
					type='text'
					placeholder='Subject'
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/>
				{errors.subject && <p className='text-red-500 text-xs italic'>{errors.subject}</p>}
			</div>
			<div className='mb-6'>
				<label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='message'>
					Message
				</label>
				<textarea
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						errors.message && 'border-red-500'
					}`}
					id='message'
					placeholder='Message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{errors.message && <p className='text-red-500 text-xs italic'>{errors.message}</p>}
			</div>
			<div className='flex items-center justify-between'>
				<button type='submit' className='windows-button'>
					Send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
