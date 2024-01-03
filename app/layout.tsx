import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bernhard Silva Porfolio',
	description: "Bernhard Silva's porfolio, Fullstack Developer",
	icons: {
		icon: "/favicon.ico",
		},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body className={inter.className}>
				{children}
				<Analytics />
				<Toaster />
			</body>
		</html>
	);
}
