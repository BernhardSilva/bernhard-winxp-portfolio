import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bernhard Silva Porfolio',
	description: "Bernhard Silva's porfolio, Fullstack Developer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
