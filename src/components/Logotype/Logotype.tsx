
import { useTheme } from '../../contexts/ThemeContext';

const LogoType = () => {
    const [theme,] = useTheme();

    return (
        <h1 className={`text-blue-500 font-bold ${theme === 'dark' && 'dark:text-gray-300'}`}>
            HWT
            <span className="font-normal font-dancing">-Guest</span >
        </h1>
    )
}

export default LogoType