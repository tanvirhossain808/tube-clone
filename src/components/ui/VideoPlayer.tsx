import useIframeApi from "@/hooks/useIframeApi";
import { FC, useRef } from "react";
type VideoPlayerProps = {
    id: string;
    width: number;
    height: number;
    start?: number
}


const VideoPlayer: FC<VideoPlayerProps> = ({ id, width, height, start = 0 }) => {
    // const { width, height } = standard
    const playerRef = useRef<HTMLDivElement>(null)
    // useIframeApi(id, playerRef)
    return (
        <>
            return <div ref={playerRef}></div>

            <iframe width={width} height={height} src={`https://www.youtube.com/embed/${id}?si=iME-NS1x5TvV9C7h&rel=0&autoplay=1&start=${start}`} title="YouTube video player" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="max-w-full h-[293px] object-cover" allowFullScreen ></iframe>
        </>
    );
};

export default VideoPlayer;