import { FormEvent, useState } from 'react';

const ContactForm = () => {
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
			validation: (value: string) => (value.trim() ? '' : 'Subject cannot be empty')
		},
		{
			name: 'message',
			label: 'Message',
			type: 'textarea',
			validation: (value: string) => (value.trim() ? '' : 'Message cannot be empty')
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
			alert(`Email sent to ${formData.email} with Subject: ${formData.subject} and Message: ${formData.message}`);
		}
	};

	return (
		<div className='flex items-center justify-center p-10'>
			<form onSubmit={handleSubmit} className='w-full max-w-md'>
				{formFields.map((field, index) => (
					<div key={index} className='mb-4'>
						<label htmlFor={field.name} className='block text-gray-300 text-sm font-bold mb-2'>
							{field.label}
						</label>
						{field.type === 'textarea' ? (
							<textarea
								className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
								className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
									errors[field.name] && 'border-red-500'
								}`}
								id={field.name}
								name={field.name}
								value={formData[field.name]}
								onChange={handleInputChange}
							/>
						)}
						{errors[field.name] && <p className='text-red-500 text-xs italic'>{errors[field.name]}</p>}
					</div>
				))}
				<div className='flex items-center justify-between'>
					<button
						type='submit'
						className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
