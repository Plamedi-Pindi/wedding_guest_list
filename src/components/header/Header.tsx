
// import components
import ThemeButton from "../button/ThemeButton";
import SearchButton from "../button/SearchButton";
import UserDropdown from "../dropdown/UserDropdown";

const Header = ({ margin }: { margin?: string }) => {

    return (
        <header className={`w-full h-14 border-[0.5px] border-gray-200 rounded-full flex items-center pl-4 pr-4 justify-between mt-4 bg-white ${margin}`}>
            <h1 className="text-blue-500 font-bold"> HWT<span className="font-normal font-dancing">-Guest</span ></h1>
            <div className="flex items-center gap-4">
                <SearchButton />
                <ThemeButton />
                <UserDropdown />
            </div>
        </header>
    )
}

export default Header