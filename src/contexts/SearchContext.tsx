
import React, { createContext, useContext, type ReactNode } from "react";

import {useState} from 'react'

// Type
type SearchProviderType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const SearchContext = createContext<SearchProviderType | null>(null);

const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [isSearch, setIsSearch] = useState<boolean>(false)
    
    return (
        <SearchContext value={[isSearch, setIsSearch] }>
            {children}
        </SearchContext>
    )
}

export default SearchProvider


export const useSearch = () => {
    const result = useContext(SearchContext);

    if (!result) {
        throw new Error("Houve um erro com o SearchContext!");
    }

    return result
}
