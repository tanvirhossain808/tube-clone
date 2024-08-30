/* eslint-disable react-hooks/exhaustive-deps */
import { QueryList, TitleType } from "@/lib/globalType"
import { addSearchCache } from "@/store/searchCacheSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useAutoComplete = (searchText: string) => {
    const cacheSearches = useSelector(
        (state: {
            searchCache: { [key: string]: { id: number; title: string }[] }
        }) => state.searchCache
    )

    const cache = cacheSearches[searchText] || []

    console.log(cache, "cache")

    const dispatch = useDispatch()

    const data = async () => {
        if (!searchText) return
        try {
            const response = await axios.post("api/search", { searchText })

            if (response.status !== 200) return "error"

            const {
                data: { data },
            } = response

            if (data.message === "fail") return "error"

            const queryList: QueryList = data.query.pages
            const titles: TitleType = {}
            for (const search in queryList) {
                const { pageid, title } = queryList[search]
                titles[search] = {
                    id: pageid,
                    title,
                }
            }
            dispatch(
                addSearchCache({
                    searchKey: searchText,
                    searchRes: Object.values(titles),
                })
            )
            //less performance
            /*   for (const [key, value] of Object.entries(queryList)) {
                const { pageid, title } = value as {
                    pageid: number
                    title: string
                }
                titles[pageid] = {
                    id: pageid,
                    title,
                }
            } */
        } catch (error: any) {
            console.log(error.message, "errors")
        }
    }

    useEffect(() => {
        // data()
        const deBouncingHand = setTimeout(() => {
            if (searchText && !cache.length) data()
            // setShowSearchSuggestionbar(true)
        }, 200)
        return () => {
            clearTimeout(deBouncingHand)
        }
    }, [searchText])

    return { cache }
}

export default useAutoComplete
