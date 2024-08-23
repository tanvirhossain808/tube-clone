import { FC } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBtn: FC<{ bg?: boolean }> = ({ bg }) => {
    return (
        <div className="h-full flex items-center">
            <button
                type="submit"
                className={`${bg ? "bg-gray-600 rounded-r-xl px-5 " : " rounded-l-xl pl-3  pointer-events-none"}
                 py-[1px] h-full transition-all duration-1000 ease-in-out`}>
                🔍
            </button>
        </div>
    );
};

export default SearchBtn;
