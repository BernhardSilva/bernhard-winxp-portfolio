import { useContext } from 'react';
import { ThemeContext } from './theme-context';

// Custom hook to use the ThemeContext
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
