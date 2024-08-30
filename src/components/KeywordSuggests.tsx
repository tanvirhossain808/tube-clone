import { KeywordSuggestionProps } from "@/lib/globalType"
import { removeParticularCache } from "@/store/searchCacheSlice"
import { FaClockRotateLeft } from "react-icons/fa6"
import { useDispatch } from "react-redux"

const KeywordSuggests = ({
    title,
    setSearchInput,
    searchInput,
    id,
}: KeywordSuggestionProps) => {
    const dispatch = useDispatch()
    const handleRemoveSearchCache = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        dispatch(
            removeParticularCache({
                searchKey: searchInput,
                removableItemId: id,
            })
        )
    }

    const handleSearchInput = (e: React.MouseEvent<HTMLLIElement>) => {
        console.log(e, "e")
        setSearchInput(e.currentTarget.getAttribute("value") || "")
        // setShowSearchSuggestionbar(false)
    }

    return (
        <li
            className="flex items-center justify-between transition-all
             duration-200 px-4 py-2 hover:bg-gray-800 hover:cursor-default"
            value={title}
            onClick={handleSearchInput}
        >
            <div className="flex items-center gap-2">
                <FaClockRotateLeft />
                <div>{title}</div>
            </div>
            <div
                className="hover:underline text-blue-400 hover:cursor-pointer"
                onClick={handleRemoveSearchCache}
            >
                <p>Remove</p>
            </div>
        </li>
    )
}

export default KeywordSuggests
