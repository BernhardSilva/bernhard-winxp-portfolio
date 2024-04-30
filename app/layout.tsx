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
		icon: "/icon.png",
		},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				<Analytics />
				<Toaster />
			</body>
		</html>
	);
}
