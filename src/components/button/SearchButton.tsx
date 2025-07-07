
// Import Icons
import { Search } from 'lucide-react';

const SearchButton = () => {

    return (
        <button className='border-[0.5px] border-gray-300 rounded-xl w-8 h-8 flex items-center justify-center'>
            <Search className='w-5.5 h-5.5 text-blue-500' />
        </button>
    )
}

export default SearchButton