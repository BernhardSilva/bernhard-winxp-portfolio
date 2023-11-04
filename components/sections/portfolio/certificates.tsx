import { Certificate } from '@/types';
import React from 'react';
type CertificatesProps = {
	certificates: Certificate[];
};

const Certificates = ({ certificates }: CertificatesProps) => {
	return (
		<>
			<h2 className='text-2xl font-bold mb-5 mt-10'>Certificates</h2>
			{certificates.map((cert, index) => (
				<div
					key={index}
					className='mb-5 p-5 rounded-md bg-gray-800 transition-all duration-500 ease-in-out transform hover:scale-105'
				>
					<h3 className='text-xl font-bold'>{cert.name}</h3>
					<p className='text-gray-400'>{cert.credentialId}</p>
					<a
						href={cert.credentialUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:text-blue-400'
					>
						View Certificate
					</a>
				</div>
			))}
		</>
	);
};

export default Certificates;
