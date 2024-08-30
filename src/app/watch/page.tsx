// "use client"

import WatchContainer from "@/components/Watch/WatchContainer"
import WatchIframe from "@/components/Watch/WatchIframe"

const Page = ({
    params,
    searchParams,
}: {
    params: string
    searchParams: { [key: string]: string }
}) => {
    const { v } = searchParams
    return (
        <>
            <WatchContainer id={v} />{" "}
        </>
    )
}

export default Page
