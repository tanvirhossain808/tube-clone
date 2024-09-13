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
    const videoTitle = videInfo?.snippet?.localized?.title
    // const channelName = videInfo?.snippet?.channelTitle
    const { channelId, commentsInfo } = useGetComments(id) || []
    const { channelData } = useGetChannelInfo(channelId)

    // console.log(channelId, "channelId")
    // console.log(channelData, "channelData")
    // console.log(commentsInfo, "commensInfo")
    const { title, thumbnails } = channelData?.data?.items[0]?.snippet || {}
    const { statistics } = channelData?.data?.items[0] || {}
    if (!commentsInfo) return
    return (
        <div className="flex">
            <WatchIframe
                id={id}
                title={videoTitle ? videoTitle : "title"}
                channelName={title ? title : "Channel name"}
                thumbnailsUrl={thumbnails?.high.url || ""}
                statistics={statistics}
                commentsInfo={commentsInfo}
            />
            <div className="w-1/4">{/* <WatchSuggestionPart id={id} /> */}</div>
        </div>
    )
}

export default WatchContainer
