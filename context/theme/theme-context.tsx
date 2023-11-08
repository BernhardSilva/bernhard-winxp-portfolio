import { ReactNode, createContext, useEffect, useState } from 'react';

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		const html = document.querySelector('html');

		if (theme === 'dark') {
			html?.classList.add('dark');
		} else {
			html?.classList.remove('dark');
		}
		// Save theme preference to local storage
		localStorage.setItem('theme', theme);
	}, [theme]);

	if (!children) {
		throw new Error('You must pass in one or more ReactNode elements.');
	}

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
