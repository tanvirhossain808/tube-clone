"use client"

import { useState } from "react"

const WatchSuggestionPart = () => {
    const [count, setCount] = useState(false)

    return (
        <>
            {/* {count ? <Example name="true" /> : <Example name="false" />}
            <h1 onClick={() => setCount(() => !count)}>toggle</h1> */}
            {/* {count ? <Example name="true" /> : <Example name="false" />} */}
            {count && <Example name={"true"} />}
            {!count && <Example name={"false"} />}
            <h1 onClick={() => setCount(() => !count)}>toggle</h1>
        </>
    )
}

export default WatchSuggestionPart

function Example({ name }: { name: string }) {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>This is for {name}</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}
