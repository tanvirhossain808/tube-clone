import { addTime } from "@/store/videoSlice";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { YouTubeProps } from "react-youtube";


const useCacheVideoTime = (id: string, playingTime: number) => {
    const dispatch = useDispatch()

    const onStateChange: YouTubeProps['onStateChange'] = (event) => {
        const updateWatchTime = event.target.playerInfo.currentTime
        if (updateWatchTime && event.data === 1) dispatch(addTime({ id, time: updateWatchTime }))
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startTime = useMemo(() => playingTime, [])

    return { onStateChange, startTime }

};

export default useCacheVideoTime;