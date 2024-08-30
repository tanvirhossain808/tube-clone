"use client"
//
import { useEffect } from "react"

const FunctionName = (...rest: {}[]) => {
    // console.log(params, rest)
    // console.log(rest)
    useEffect(() => {
        console.log("hey")
    }, [])
    return (
        <>
            <Fun k={"name"} />
            <div>this is for params</div>
        </>
    )
}

export default FunctionName

const Fun = (...rest: { k: string }[]) => {
    console.log(rest[0].k)
    return <div>This is for fun</div>
}
