import { EmailTemplate } from '@/components/email/email-template';
import { NextResponse } from 'next/server';
import * as React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL;

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { email, name, subject, message } = body;
		if (!email || !name || !subject || !message || !toEmail || !fromEmail) {
			return NextResponse.json({ error: 'Missing fields' });
		}
		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			subject: subject,
			react: EmailTemplate({ firstName: name, email, subject, message }) as React.ReactElement
		});

		console.log(email, name, subject, message, data, error);

		if (error) {
			return NextResponse.json({ error });
		}

		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
