import { User } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FormEvent, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { toastSuccessStyle } from '../../../helpers/toasts-style';

type Props = {
	user: User;
};

const ContactForm = ({ user }: Props) => {
	const formFields = [
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			validation: (value: string) => (value && /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address')
		},
		{
			name: 'subject',
			label: 'Subject',
			type: 'text',
			validation: (value: string) =>
				value.trim().length > 3 ? '' : 'Subject cannot be empty or less than 3 characters'
		},
		{
			name: 'message',
			label: 'Message',
			type: 'textarea',
			validation: (value: string) =>
				value.trim().length > 10 ? '' : 'Message cannot be empty or less than 10 characters'
		}
	];

	const initialFormData: Record<string, string> = {};
	formFields.forEach((field) => (initialFormData[field.name] = ''));

	const [formData, setFormData] = useState(initialFormData);
	const [errors, setErrors] = useState(initialFormData);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		const newErrors = { ...errors };
		newErrors[name] = formFields.find((field) => field.name === name)?.validation(value) || '';
		setErrors(newErrors);
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const validateForm = () => {
		const newErrors = { ...errors };
		formFields.forEach((field) => {
			newErrors[field.name] = field.validation(formData[field.name]);
		});
		setErrors(newErrors);
		return Object.values(newErrors).every((error) => !error);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			toast.success('Email sent successfully!', {
				style: { ...toastSuccessStyle }
			});
			alert(`Email sent to ${formData.email} with Subject: ${formData.subject} and Message: ${formData.message}`);
		}
	};

	return (
		<div className='flex-inline'>
			<h2 className='text-4xl text-gray-800 dark:text-white'>Contact Me</h2>
			<div className='flex border-2 border-[#C8C8C8] dark:border-slate-700 items-center justify-center p-10 bg-[#dfdfdf] dark:bg-slate-800 rounded-md mt-5'>
				<form onSubmit={handleSubmit} className='w-full max-w-md'>
					{formFields.map((field, index) => (
						<div key={index} className='mb-4'>
							<label
								htmlFor={field.name}
								className='block text-gray-800 dark:text-gray-300 text-sm font-bold mb-2 text-start'
							>
								{field.label}
							</label>
							{field.type === 'textarea' ? (
								<textarea
									className={`shadow appearance-none border rounded w-full py-2 px-3 bg-[#F8F8F8] dark:bg-slate-600 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline ${
										errors[field.name] && 'border-red-500'
									}`}
									id={field.name}
									name={field.name}
									value={formData[field.name]}
									onChange={handleInputChange}
								/>
							) : (
								<input
									type={field.type}
									className={`shadow appearance-none border rounded w-full py-2 px-3 bg-[#F8F8F8] dark:bg-slate-600 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline ${
										errors[field.name] && 'border-red-500'
									}`}
									id={field.name}
									name={field.name}
									value={formData[field.name]}
									onChange={handleInputChange}
								/>
							)}
							{errors[field.name] && <p className='text-red-500 text-xs italic  text-start'>{errors[field.name]}</p>}
						</div>
					))}
					<div className='flex justify-around place-items-center'>
						<button
							type='submit'
							className='bg-slate-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:scale-105'
						>
							Send
						</button>
						<a
							className='flex items-center gap-10'
							href={`https://api.whatsapp.com/send?phone=${user.contact.phone}&text=Hola%20${user.name}`}
							target='_blank'
						>
							<Icon
								className='cursor-pointer transition duration-300 ease-in-out hover:scale-110'
								icon='logos:whatsapp-icon'
								width={40}
								height={40}
							/>
						</a>
					</div>
				</form>
				<Toaster richColors />
			</div>
		</div>
	);
};

export default ContactForm;
