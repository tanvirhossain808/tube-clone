import { VideoSearchTypeItemsType } from "@/lib/globalType"
import React, { useState } from "react"
import YouTube, { YouTubeProps } from "react-youtube"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import Thumbnail from "./ui/Thumbnail"
import VideoPlayer from "./ui/VideoPlayer"
import useShowHoverVideo from "@/hooks/UseShowHoverVideo"

const SuggestionVideo = ({
    id,
    title,
    thumbnails,
    publishedAt,
}: VideoSearchTypeItemsType) => {
    const opts: YouTubeProps["opts"] = {
        height: "500",
        // width: 400,
        width: "100%",
        playerVars: {
            autoplay: 1,
            mute: 1,
            // start: Math.round(startTime),
        },
    }
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const showVideo = useShowHoverVideo(isHovered)
    const handleClickVideo = () => {}
    return (
        <div>
            <Card
                className="w-full h-[400px] bg-rd-800 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClickVideo}
            >
                <CardContent className="">
                    {showVideo ? (
                        <VideoPlayer id={id.videoId} show={false} />
                    ) : (
                        <Thumbnail {...thumbnails} />
                    )}
                </CardContent>
                <CardTitle>{title}</CardTitle>
                {/* <CardFooter className="flex justify-between">
                <div className=" flex items-center gap-1  text-[#ffffff91]">
                    <div>{formateStatisticsCount(viewCount, "views")}</div>
                    <div className="h-1 w-1 rounded-full bg-[#ffffff91]"></div>
                    <div>{formatUploadedDay(publishedAt)}</div>
                </div>
            </CardFooter> */}
            </Card>
        </div>
    )
}

export default SuggestionVideo
