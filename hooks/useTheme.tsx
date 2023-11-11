import useThemeStore from '@/stores/theme-store';
import { useEffect } from 'react';

export const useTheme = () => {
	const theme = useThemeStore((state) => state.theme);
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	useEffect(() => {
		const html = document.querySelector('html');
		if (theme === 'dark') {
			html?.classList.add('dark');
		} else {
			html?.classList.remove('dark');
		}
	}, [theme]);

	return { theme, toggleTheme };
};
