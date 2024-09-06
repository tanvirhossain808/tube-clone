"use client"
import { useSelector } from "react-redux"
import VideoPlayer from "../ui/VideoPlayer"
import WatchIframe from "./WatchIframe"
import WatchSuggestionPart from "./WatchSuggestionPart"
import { CartType } from "@/lib/globalType"
import { useEffect } from "react"
import axios from "axios"
import useGetComments from "@/hooks/useGetComments"
import useGetChannelInfo from "@/hooks/useGetChannelInfo"

const WatchContainer = ({ id }: { id: string }) => {
    const selector = useSelector(
        (state: CartType) => state?.cart?.items[0]?.items
    )
    const videInfo = selector?.find((arr) => arr.id === id)
    const title = videInfo?.snippet?.localized?.title
    const channelName = videInfo?.snippet?.channelTitle
    const { channelId, commentsInfo } = useGetComments(id)
    const { channelData } = useGetChannelInfo(channelId)
    // useEffect(() => {
    //     const getInfo = async () => {
    //         // const { data } = await fetchCommetnData()
    //         // const channelId = data[0].snippet.channelId
    //         //
    //         // const commentData = await fetchCommetnData()

    //     }
    //     getInfo()
    // }, [id])
    console.log(channelId, channelData, commentsInfo)

    return (
        <div className="flex">
            <WatchIframe
                id={id}
                title={title ? title : "title"}
                channelName={channelName ? channelName : "Channel name"}
            />
            <div className="w-1/2">
                <h1>hello</h1>
            </div>
            {/* <WatchSuggestionPart />/ */}
        </div>
    )
}

export default WatchContainer
