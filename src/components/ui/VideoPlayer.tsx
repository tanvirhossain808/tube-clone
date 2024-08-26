import React, { FC, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

type VideoPlayerProps = {
    id: string;
    width: number;
    height: number;
    start?: number;
};

const VideoPlayer: FC<VideoPlayerProps> = ({ id, width, height, start = 0 }) => {
    const playerRef = useRef<any>(null);  // Ref to hold the player instance
    let timeOut: ReturnType<typeof setTimeout>;
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        const player = event?.target;
        if (player) {
            player.pauseVideo()
            // timeOut = setTimeout(() => player?.playVideo(), 3000)
            playerRef.current = player;  // Store the player instance in ref
            // ;          // Start playing the video
        } else {
            console.error('Player not initialized properly');
        }
    };

    // Clean up player on component unmount
    useEffect(() => {
        return () => {
            clearTimeout(timeOut)
            if (playerRef.current) {
                // Stop the video if needed
                console.log("destroy", playerRef.current?.stopVideo);
                // playerRef.current?.stopVideo();
                // Note: YouTube API does not provide a destroy method, so use other cleanup strategies if needed
            }
        };
    }, []);  // Empty dependency array to run cleanup on unmount

    const opts: YouTubeProps['opts'] = {
        height: `${height}`,
        width: `${width}`,
        playerVars: {
            autoplay: 1,
            mute: 1,
            fs: 0,
            start: start,  // Start video at specified time
        },
    };

    return (
        <YouTube
            videoId={id}
            opts={opts}
            className="w-full"
            iframeClassName="w-full h-[295px]"
        />
    );
};

export default VideoPlayer;
