/* eslint-disable react-hooks/exhaustive-deps */
import { addTime } from "@/store/videoSlice";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { YouTubeProps } from "react-youtube";


const useCacheVideoTime = (id: string, playingTime: number) => {
    const dispatch = useDispatch()
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const onStateChange: YouTubeProps['onStateChange'] = (event) => {
        if (timeRef.current) clearInterval(timeRef.current)

        timeRef.current = setInterval(() => {
            const updateWatchTime = event.target.playerInfo.currentTime
            if (updateWatchTime) dispatch(addTime({ id, time: updateWatchTime }))
        }, (200));
        const updateWatchTime = event.target.playerInfo.currentTime
        if (updateWatchTime) dispatch(addTime({ id, time: updateWatchTime }))
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startTime = useMemo(() => playingTime, [])

    useEffect(() => {
        return () => {
            if (timeRef.current) clearInterval(timeRef.current)

        }
    }, [])
    return { onStateChange, startTime }

};

export default useCacheVideoTime;