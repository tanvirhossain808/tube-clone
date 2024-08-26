import useCacheVideoTime from '@/hooks/useCacheVideoTime';
import React, { FC, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

type VideoPlayerProps = {
    id: string;
    width: number;
    height: number;
    start?: number;
    playingTime: number
};

const VideoPlayer: FC<VideoPlayerProps> = ({ id, width, height, start = 0, playingTime }) => {


    const { onStateChange, startTime } = useCacheVideoTime(id, playingTime)

    const opts: YouTubeProps['opts'] = {
        height: `${height}`,
        width: `${width}`,
        playerVars: {
            autoplay: 1,
            mute: 1,
            fs: 0,
            start: Math.round(startTime),
        },
    };

    return (
        <YouTube
            videoId={id}
            opts={opts}
            className="w-full"
            iframeClassName="w-full h-[295px]"
            loading="lazy"
            onStateChange={onStateChange}

        />
    );

};

export default VideoPlayer;
