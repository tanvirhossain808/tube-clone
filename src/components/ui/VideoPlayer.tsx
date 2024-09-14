"use client"
import useCacheVideoTime from "@/hooks/useCacheVideoTime"
import { FC } from "react"
// import YouTube, { YouTubeProps } from "react-youtube"
import { YouTube, YouTubeProps } from "../../utils/ExportLib/ExportLib"
type VideoPlayerProps = {
    id: string
    width?: number
    height?: number
    start?: number
    playingTime?: number
    totalTime?: string
    show?: boolean
}

const VideoPlayer: FC<VideoPlayerProps> = ({
    id,
    width,
    height,
    start = 0,
    playingTime = 0,
    totalTime,
    show = true,
}) => {
    const { onStateChange, startTime, leftTime, onReady, callHook } =
        useCacheVideoTime(id, playingTime, totalTime as string)
    const opts: YouTubeProps["opts"] = {
        height: `${height}`,
        width: `${width}`,
        playerVars: {
            autoplay: 1,
            mute: 1,
            fs: 0,
            start: Math.round(startTime || 0),
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
                {...(callHook && { onStateChange, onReady, leftTime })}
            />
            {
                <p
                    className={`absolute bottom-16 w-10
                 text-[12px] rounded-sm bg-[#000000c9]
                  right-2 items-center justify-center
                   h-[26px] ${show ? "flex" : "hidden"}`}
                >
                    {leftTime}
                </p>
            }
        </div>
    )
}

export default VideoPlayer
