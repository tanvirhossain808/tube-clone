import useAutoComplete from "@/hooks/useAutoCompleteSuggestion"
import useSearchTest from "@/hooks/useSearchTest"
import React, { useState } from "react"
import SearchBtn from "./Header/SearchBtn"
import VoiceSearch from "../VoiceSearch"
import KeywordSuggests from "../KeywordSuggests"

const FormInput = () => {
    const [focus, setFocus] = useState(false)
    console.log(focus, "focus")
    const { onSubmit, searchInput, setSearchInput } = useSearchTest()
    const { cache: searchSuggestion } = useAutoComplete(searchInput)

    return (
        <>
            <form
                className="flex items-center relative h-full"
                onSubmit={onSubmit}
            >
                <div className={` flex rounded-xl h-9 items-center`}>
                    <div className="relative h-9">
                        <label
                            htmlFor="search"
                            className={`w-[550px] relative rounded-l-xl border h-9 flex items-center z-10 
                                ${focus ? "border-blue-400" : " border-gray-700"}`}
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
                                onBlur={() =>
                                    setTimeout(() => setFocus(false), 100)
                                }
                            />
                        </label>

                        <ul
                            className={`absolute h-[300px] right-0 top-full left-0 pt-2 
                              flex flex-col bg-[black] ${
                                  searchSuggestion?.length === 0 || !focus
                                      ? "hidden"
                                      : ""
                              }`}
                        >
                            {searchSuggestion?.map((keyword) => (
                                <KeywordSuggests
                                    key={keyword.id}
                                    title={keyword.title}
                                    setSearchInput={setSearchInput}
                                    searchInput={searchInput}
                                    id={keyword.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="h-full group">
                        <SearchBtn bg={true} />
                        <div className="absolute top-full translate-x-1 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                            <p>Search</p>
                        </div>
                    </div>
                </div>
            </form>
            <div className="group">
                <VoiceSearch />
                <div className="absolute top-full -translate-x-10 text-nowrap rounded-sm invisible opacity-0 scale-x-0 duration-500 transform transition-all origin-center bg-gray-400 text-[14px] p-1 group-hover:scale-x-100 group-hover:visible group-hover:opacity-100">
                    <p>Search with your voice</p>
                </div>
            </div>
        </>
    )
}

export default FormInput
