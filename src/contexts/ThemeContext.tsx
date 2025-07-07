
import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemeProviderType = {
    children: ReactNode
}

type ThemeContextType = ['light' | 'dark', React.Dispatch<React.SetStateAction<'light' | 'dark'>>];
const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: ThemeProviderType) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
    );

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext value={[theme, setTheme]}>
            {children}
        </ThemeContext>
    );
}

export default ThemeProvider

export const useTheme = () => {
    const result = useContext(ThemeContext);

    if (!result) {
        throw new Error("Houve um erro no ThemeContext!");
    }

    return result;
}