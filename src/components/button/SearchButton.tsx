
// Import Icons
import { Search } from 'lucide-react';

// import Search Context
import { useSearch } from '../../contexts//SearchContext';

// Import Theme context
import { useTheme } from '../../contexts/ThemeContext';

const SearchButton = () => {
    const [, setIsSearch] = useSearch();
    const [theme,] = useTheme();

    return (
        <button onClick={() => setIsSearch(true)} className={`${theme === 'dark' && 'dark:border-gray-600'} border-[0.5px] border-gray-300 rounded-xl w-8 h-8 flex items-center justify-center`}>
            <Search className={`${theme === 'dark' && 'dark:text-gray-300'} w-5.5 h-5.5 text-blue-500`} />
        </button>
    )
}

export default SearchButton