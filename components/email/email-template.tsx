import * as React from 'react';

interface EmailTemplateProps {
	firstName: string;
	message: string;
	email: string;
	subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName, message, email, subject }) => {
	const text = `Hi Bernhard, this person: '${firstName}' with this email: ${email} contact you from your Portfolio.`;
	return (
		<div>
			<h3>{text}</h3>
			<h2>Subject: {subject}</h2>
			<p>Message: {message}</p>
		</div>
	);
};
