// Import icons
import { Sun, Moon } from 'lucide-react';

const ThemeButton = ({ margin }: { margin?: string }) => {

    return (
        <button className={`${margin} border-[0.5px] border-gray-300 rounded-xl w-8 h-8 flex items-center justify-center`}>
            <Sun className='text-blue-500 w-5.5' />
        </button>
    )
}

export default ThemeButton