// "use client"

import useGetVideoSearchList from "@/hooks/useGetVideoSearchList"
import { CartType } from "@/lib/globalType"
import { useState } from "react"
import { useSelector } from "react-redux"
import SuggestionVideo from "../SuggestionVideo"

const WatchSuggestionPart = ({ id }: { id: string }) => {
    const [count, setCount] = useState(false)
    useGetVideoSearchList(id)
    const videoList = useSelector(
        (state: CartType) => state.videoSearch.videoSuggestion
    )

    return (
        <>
            <div>
                {videoList.map((video, index) => {
                    return <SuggestionVideo key={index} {...video} />
                })}
            </div>
        </>
    )
}

export default WatchSuggestionPart
