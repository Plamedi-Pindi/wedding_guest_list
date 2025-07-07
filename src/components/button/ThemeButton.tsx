// Import icons
import { Sun, Moon } from 'lucide-react';

//  Import theme context
import { useTheme } from '../../contexts/ThemeContext';

const ThemeButton = ({ margin }: { margin?: string }) => {
    const [theme, setTheme] = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`${margin} ${theme === 'dark' && 'dark: border-gray-600'} border-[0.5px] border-gray-300 rounded-xl w-8 h-8 flex items-center justify-center`}
        >
            {theme === 'light' ? (
                <Sun className={`text-blue-500 w-5.5 `} />
            ) : (
                <Moon className={`text-blue-500 w-5.5 ${theme === 'dark' && 'text-gray-300'}`} />
            )}
        </button>
    )
}

export default ThemeButton