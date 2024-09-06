"use client"
// import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

const FunctionName = (...rest: {}[]) => {
    // console.log(params, rest)
    // console.log(rest)
    const [data, setData] = useState("data")

    const date = new Date()
    const formattedDate = date.toISOString()
    return (
        <>
            <Fun k={"name"} />
            <time dateTime={formattedDate} suppressHydrationWarning>
                {formattedDate}
                <p>{data}</p>
            </time>
            <div>this is for params</div>
        </>
    )
}

export default FunctionName

const Fun = (...rest: { k: string }[]) => {
    console.log(rest[0].k)
    return <div>This is for fun</div>
}
