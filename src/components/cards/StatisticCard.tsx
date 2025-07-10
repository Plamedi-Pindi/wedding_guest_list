// Import icons
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

// Imprt theme
import { useTheme } from '../../contexts/ThemeContext';

// Import Motion
import { animate, motion, useMotionValue, useTransform } from "motion/react";

// Import Hooks
import { useEffect } from "react"


// Types
type StatisticCardType = {
    number: number,
    icon: ReactNode,
    iconBackground: string,
    percentage: number,
    status: string
}

const StatisticCard: React.FC<StatisticCardType> = ({ number, icon, iconBackground, percentage, status }) => {
    const [theme,] = useTheme();
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
        const controls = animate(count, number, { duration: 5 })
        return () => controls.stop()
    }, []);

    return (
        <div className={`w-36 h-28 bg-white p-3 rounded-lg shadow-md ${theme === 'dark' && 'dark:bg-gray-800 '}`}>
            <div className={`flex items-center justify-between mt-1 `}>
                <div>
                    <motion.span className={`text-xl font-bold  ${theme === 'dark' && 'dark:text-gray-50'}`}>{rounded}</motion.span>
                    <p className={`text-sm text-gray-500   ${theme === 'dark' && 'dark:text-gray-300'}`}>Convidados</p>
                </div>

                <div className={`w-9 h-9 ${iconBackground}  rounded-full flex items-center justify-center`}>
                    {icon}
                </div>
            </div>

            <div className={`flex items-center gap-2 mt-2`}>
                <div className={`flex items-center text-green-600 text-xs`}>
                    <ArrowUpRight className={`w-4`} />
                    <p>{percentage}%</p>
                </div>

                <p className={`text-xs text-gray-400 tracking-[0.5px]`}>{status}</p>
            </div>
        </div>
    )
}

export default StatisticCard