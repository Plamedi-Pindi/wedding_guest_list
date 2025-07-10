
// import components
import ThemeButton from "../button/ThemeButton";
import SearchButton from "../button/SearchButton";
import UserDropdown from "../dropdown/UserDropdown";
import LogoType from "../Logotype/Logotype";

// Import Theme context
import { useTheme } from '../../contexts/ThemeContext';

const Header = ({ margin }: { margin?: string }) => {
    const [theme,] = useTheme();

    return (
        <header className={` ${theme === 'dark' && 'dark:bg-gray-800/10 dark:border-[0.2px] dark:border-gray-600'} w-[90%] h-14 border-[0.5px] border-gray-200 rounded-full flex items-center pl-4 pr-4 justify-between mt-4 bg-white/50 backdrop-blur-sm z-[100] ${margin} fixed left-[50%] translate-x-[-50%]`}>
            <LogoType />    
            <div className="flex items-center gap-4">
                <SearchButton />
                <ThemeButton />
                <UserDropdown />
            </div>
        </header>
    )
}

export default Header