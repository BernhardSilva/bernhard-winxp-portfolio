import { mockUser } from '@/mock/mock-data';
import { useState } from 'react';

const Servicies = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='text-center'>
				<h1 className='text-3xl font-bold mb-5'>SERVICES</h1>
				<p className='text-lg mb-10'>What can I do for you? I offer multiple services.</p>
			</div>
			<div className='flex flex-wrap gap-10 justify-center'>
				{mockUser.services.map((service, index) => (
					<div
						key={index}
						className='p-5 bg-white dark:bg-gray-800 rounded-md max-w-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
					>
						<div className='flex items-center space-x-2 mb-3'>
							<span className='text-2xl'>{service.icon}</span>
							<h2 className='text-xl font-bold'>{service.name}</h2>
						</div>
						<p className='text-gray-700 dark:text-gray-400'>{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Servicies;
