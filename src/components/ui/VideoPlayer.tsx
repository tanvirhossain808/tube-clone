import useCacheVideoTime from "@/hooks/useCacheVideoTime"
import React, { FC, useRef } from "react"
import YouTube, { YouTubeProps } from "react-youtube"

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
        totalTime
    )

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
            {
                <p
                    className="absolute bottom-16 w-10
                 text-[12px] rounded-sm bg-[#000000c9]
                  right-2 flex items-center justify-center
                   h-[26px]"
                >
                    {leftTime}
                </p>
            }
        </div>
    )
}

export default VideoPlayer
