import { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider.jsx';

const useTheme = () => {
    const context = useContext(ThemeContext)
    return context
};

export default useTheme;