// "use client"

import useGetVideoSearchList from "@/hooks/useGetVideoSearchList"
import { useState } from "react"

const WatchSuggestionPart = ({ id }: { id: string }) => {
    const [count, setCount] = useState(false)
    const { videosList } = useGetVideoSearchList(id)

    return (
        <>
            <h1 onClick={() => setCount(() => !count)}>toggle</h1>
        </>
    )
}

export default WatchSuggestionPart
