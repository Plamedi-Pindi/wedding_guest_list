import type React from "react"

// Import Components
import Header from "../../components/header/Header";
import SearchModal from "../../components/Modal/SearchModal";
import StatisticCard from "../../components/cards/StatisticCard";
import GuestTable from "../../components/tables/GuestTable";

// Import Theme context
import { useTheme } from '../../contexts/ThemeContext';

//  Impoer icons
import { UserRoundCheck, UserRoundX } from 'lucide-react';

// Import Framer Motion
import { motion } from 'motion/react';

const HomePage: React.FC = () => {
    const [theme,] = useTheme();

    return (
        <div className={` ${`${theme === 'dark' && 'bg-gray-900 dark:bg-[url("/dirty.png")]'}`} p-4  min-h-screen relative `}>
            <Header />

            <div className="flex flex-col items-center pt-25 h-44  ">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={`text-2xl font-bold mb-1 text-gray-900 tracking-[1px] ${theme === 'dark' && 'dark:text-gray-200'}`}
                >
                    Seja bem vindo(a) ao
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={`text-xl font-bold mb-1 text-gray-900 tracking-[1px] ${theme === 'dark' && 'dark:text-gray-200'}`}
                >
                    HWT-Guest
                </motion.p>
            </div>

            {/* Statistic Card */}
            <div className="mt-4 flex flex-wrap items-center justify-around">
                <StatisticCard
                    icon={<UserRoundX className='text-[#F2994A] w-5 ' />}
                    number={12}
                    percentage={30}
                    iconBackground="bg-[#F2994A]/20"
                    status="Ausentes"
                />
                <StatisticCard
                    icon={<UserRoundCheck className={'text-[#3498DB] w-5 '} />}
                    number={30}
                    percentage={40}
                    iconBackground="bg-[#3498DB]/20"
                    status="Presentes"
                />
            </div>

            {/* Guest Table */}
            <section className="mt-8">
                <GuestTable />
            </section>

            {/* Search Modals */}
            <SearchModal />
        </div>
    )
}

export default HomePage