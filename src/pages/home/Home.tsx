import type React from "react"

// Import Components
import Header from "../../components/header/Header";
import SearchModal from "../../components/Modal/SearchModal";

// Import Theme context
import { useTheme } from '../../contexts/ThemeContext';

const HomePage: React.FC = () => {
    const [theme, ] = useTheme();

    return (
        <div className={` ${`${theme === 'dark' && 'bg-gray-900'}`} p-2 min-h-screen relative `}>
            <Header />


            {/* Search Modals */}
            <SearchModal />
        </div>
    )
}

export default HomePage