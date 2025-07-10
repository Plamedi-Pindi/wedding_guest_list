
// Imprt icons
import { User } from 'lucide-react';

// Import Theme context
import {useTheme} from '../../contexts/ThemeContext';

const UserDropdown = () => {
    const [theme, ]= useTheme();
    return (
        <button className={`${theme === 'dark' && 'dark:border-gray-600'} w-8 h-8 border-[0.5px] border-gray-300 rounded-full flex items-center justify-center text-blue-500 `}>
            <User className={`${theme === 'dark' && 'dark:text-gray-300'} w-5.5`} />
        </button>
    )
}

export default UserDropdown

