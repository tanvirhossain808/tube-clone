"use client"
import useCacheVideoTime from "@/hooks/useCacheVideoTime"
import { FC } from "react"
// import YouTube, { YouTubeProps } from "react-youtube"
import { YouTube, YouTubeProps } from "../../utils/ExportLib/ExportLib"
type VideoPlayerProps = {
    id: string
    width: number
    height: number
    start?: number
    playingTime: number
    totalTime: string
}

const VideoPlayer: FC<VideoPlayerProps> = ({
    id,
    width,
    height,
    start = 0,
    playingTime,
    totalTime,
}) => {
    const { onStateChange, startTime, leftTime, onReady } = useCacheVideoTime(
        id,
        playingTime,
        totalTime as string
    )
    console.log(id, "hey")
    const opts: YouTubeProps["opts"] = {
        height: `${height}`,
        width: `${width}`,
        playerVars: {
            autoplay: 1,
            mute: 1,
            fs: 0,
            start: Math.round(startTime),
        },
    }
    return (
        <div className="relative">
            <YouTube
                videoId={id}
                opts={opts}
                className="w-full"
                iframeClassName="w-full h-[295px]"
                loading="lazy"
                onStateChange={onStateChange}
                onReady={onReady}
            />
        </div>
    )
}

export default VideoPlayer
