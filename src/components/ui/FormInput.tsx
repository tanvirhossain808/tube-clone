import useAutoComplete from "@/hooks/useAutoCompleteSuggestion"
import useSearchTest from "@/hooks/useSearchTest"
import React, { useState } from "react"
import SearchBtn from "./Header/SearchBtn"
import VoiceSearch from "../VoiceSearch"
import KeywordSuggests from "../KeywordSuggests"

const FormInput = () => {
    const [focus, setFocus] = useState(false)
    // useSearchVideo()
    const { onSubmit, searchInput, setSearchInput } = useSearchTest()
    const { searchSuggestion } = useAutoComplete(searchInput)
    console.log(searchSuggestion, "d")
    return (
        <form className="flex items-center relative h-full" onSubmit={onSubmit}>
            <div
                className={` flex border rounded-xl border-r-0 h-[34px] 
                        items-center
                         ${focus ? "border-blue-400" : " border-gray-700"}`}
            >
                <label
                    htmlFor="search"
                    className="w-[550px] relative h-full flex items-center"
                >
                    <input
                        type="test"
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                        placeholder="Search"
                        name="search"
                        id="search"
                        className="outline-none border border-transparent w-full
                            bg-transparent pl-3"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </label>
                <div className="h-full group">
                    <SearchBtn bg={true} />
                    <div className="absolute top-full -translate-x-2 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                        <p>notification</p>
                    </div>
                </div>
            </div>
            <div className="group">
                <VoiceSearch />
                <div className="absolute top-full -translate-x-10 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                    <p>Search with your voice</p>
                </div>
            </div>
            <div
                className={`absolute h-[300px]  right-0
             top-[96%] left-0 items-center gap-4 
              flex flex-col bg-[#000000c5] ${searchSuggestion?.length === 0 && "hidden"}`}
            >
                {searchSuggestion?.map((keyword) => (
                    <KeywordSuggests key={keyword.id} title={keyword.title} />
                ))}
            </div>
        </form>
    )
}

export default FormInput
