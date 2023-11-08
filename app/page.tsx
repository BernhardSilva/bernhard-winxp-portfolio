'use client';
import Windows from '@/components/windows-xp';
import { ThemeProvider } from '@/context/theme/theme-context';

const Home = () => {
	return (
		<ThemeProvider>
			<Windows />;
		</ThemeProvider>
	);
};

export default Home;
