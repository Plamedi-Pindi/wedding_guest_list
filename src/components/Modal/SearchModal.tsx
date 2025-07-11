
// Import Icons
import { Search, X } from 'lucide-react';

// Import Hooks
import { useEffect, useRef, useState, type ChangeEvent } from 'react';

// Import components
import ModalBackground from './ModalBackground';

// Import search context
import { useSearch } from '../../contexts/SearchContext';

// Import Theme context
import {useTheme} from '../../contexts/ThemeContext';

const SearchModal = () => {
    const modalBackRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState('');
    const [isSearch, setIsSearch] = useSearch();
    const [theme, ] = useTheme();

    useEffect(() => {
        if (!modalBackRef.current) return;

        const modalBack = modalBackRef.current;

        modalBack.style.transition = '0.2s '

        if (isSearch) {
            modalBack.style.height = '100vh'
        } else {
            modalBack.style.height = '0vh'
            setInput("");
        }

    }, [isSearch]);

    return (
        <ModalBackground ref={modalBackRef} onclick={() => setIsSearch(false)}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={` ${theme === 'dark' && 'dark:bg-gray-800 '} w-[20rem] h-[12rem] bg-white relative top-24 rounded-xl shadow-sm`}
            >
                <div className="border-b-[0.5px] border-gray-400 h-15 p-2 pl-4 pr-4 flex gap-2 items-center rounded-t-xl">
                    <Search className={`w-5.5 text-gray-600 ${theme === 'dark' && 'dark:text-gray-300'}`} />
                    <SearchInput value={input} onChange={(e) => setInput(e.target.value)} />
                    <button>
                        <X onClick={() => setIsSearch(false)} className={`w-5.5 text-gray-600 ${theme === 'dark' && 'dark:text-gray-300'} `} />
                    </button>
                </div>
            </div>
        </ModalBackground>
    )
}

export default SearchModal

type searchInputType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string
}
const SearchInput = ({ onChange, value }: searchInputType) => {
     const [theme, ] = useTheme();
    return (
        <input
            onChange={onChange}
            value={value}
            type="text"
            placeholder='Pesquisar convidados...'
            className={` ${theme === 'dark' && 'dark:bg-gray-800 ] dark:text-gray-300'} bg-white grow p-2 outline-none text-gray-700`}
        />
    )
}