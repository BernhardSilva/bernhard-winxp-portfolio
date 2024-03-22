'use client';

import { toastErrorStyle, toastSuccessStyle } from '@/helpers/toasts-style';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
	const [loading, setLoading] = useState(false);

	const formFields = [
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			validation: (value: string) => (value && /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address')
		},
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			validation: (value: string) =>
				value.trim().length > 3 ? '' : 'Subject cannot be empty or less than 3 characters'
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
			sendEmail();
		}
	};

	const showError = () => {
		toast.error('Something went wrong!', {
			style: { ...toastErrorStyle }
		});
	};

	const sendEmail = async () => {
		setLoading(true);
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				toast.success('Email sent successfully!', {
					style: { ...toastSuccessStyle }
				});
				setFormData({ ...initialFormData });
				setErrors(initialFormData);
				return;
			}
			const { error } = await response.json();
			if (error) {
				showError();
			}
		} catch (error) {
			showError();
		} finally {
			setLoading(false);
			return;
		}
	};

	return (
		<div className='flex-inline opacity-95'>
			<h2 className='text-3xl mt-5 text-gray-800 dark:text-white bg-[#C8C8C8] dark:bg-slate-800 rounded-lg p-2 transition duration-500'>
				Contact Me
			</h2>
			<div className='flex border-2 border-[#C8C8C8] dark:border-slate-700 place-content-center justify-center p-8 bg-[#dfdfdf] dark:bg-slate-800 rounded-md mt-5 transition duration-500'>
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
									className={`shadow appearance-none border rounded w-full max-h-[150px] py-2 px-3 bg-[#F8F8F8] dark:bg-slate-600 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline ${
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
							disabled={loading}
							type='submit'
							className={`flex justify-center items-center bg-slate-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:scale-105`}
						>
							{loading ? (
								<svg
									className='animate-spin h-6 w-6 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									></path>
								</svg>
							) : (
								<Icon
									className='cursor-pointer transition duration-300 ease-in-out hover:scale-110'
									icon='bi:send-fill'
									width={25}
									height={25}
								/>
							)}
						</button>
						<a className='flex items-center gap-10' href={`https://wa.link/m7zcha`} target='_blank'>
							<Icon
								className='cursor-pointer transition duration-300 ease-in-out hover:scale-110'
								icon='logos:whatsapp-icon'
								width={40}
								height={40}
							/>
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
