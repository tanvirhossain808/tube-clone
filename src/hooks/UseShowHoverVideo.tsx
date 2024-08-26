import { useEffect, useRef, useState } from "react";
type UseShowHoverVideoProps = (isHovered: boolean) => boolean;

const useShowHoverVideo: UseShowHoverVideoProps = (isHovered) => {
    const [showVideo, setShowVideo] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const hover = () => {
            if (isHovered) {
                timerRef.current = setTimeout(() => {
                    setShowVideo(true)
                }, 1000)
            }
            if (!isHovered) {
                setShowVideo(false)
            }
        }
        hover()
        return () => {
            timerRef.current && clearTimeout(timerRef.current)
        }
    }, [isHovered]);
    return showVideo
};

export default useShowHoverVideo;