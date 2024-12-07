import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider/ThemeProvider.jsx';

export const useTheme = () => useContext(ThemeContext);
