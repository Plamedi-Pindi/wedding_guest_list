
// Import components
import LogoType from "../Logotype/Logotype";

// import theme context
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
    const [theme,] = useTheme();

    const year = new Date().getFullYear();

    return (
        <div className={` ${theme === 'dark' && 'bg-linear-to-t from-blue-500/80  to-50%'} h-40  flex items-center justify-center `}>
            <footer className={` ${theme === 'dark' && 'dark:border-gray-700 dark:border-[0.5px] dark:bg-gray-800/10 dark:backdrop-blur-sm '}  shadow-xl p-4 h-36 w-[90%] rounded-xl relative bg-white/90 backdrop-blur-xl `}>
                <LogoType />

                <div className={`${theme === 'dark' && 'dark:text-gray-300'} text-sm  absolute bottom-4 text-gray-500`}>
                    Copyright &copy; {year} HWT-Guest
                </div>
            </footer>
        </div>
    )
}

export default Footer