/* eslint-disable react-hooks/exhaustive-deps */
import { addTime } from "@/store/videoSlice"
import { useEffect, useMemo, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { YouTubeProps } from "react-youtube"
import { moment } from "../utils/ExportLib/ExportLib"
const useCacheVideoTime = (
    id: string,
    playingTime: number,
    totalTime: string
) => {
    const dispatch = useDispatch()
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const [leftTime, setLeftTime] = useState<string | null>(null)

    const onStateChange: YouTubeProps["onStateChange"] = (event) => {
        if (timeRef.current) clearInterval(timeRef.current)
        timeRef.current = setInterval(() => {
            const updateWatchTime = event.target.playerInfo.currentTime
            if (updateWatchTime)
                dispatch(addTime({ id, time: updateWatchTime }))
            console.log(updateWatchTime, "hey")
            const durationInMs =
                moment.duration(totalTime).asSeconds() - updateWatchTime
            console.log(durationInMs, "ms")
            const duration = moment.duration(durationInMs, "seconds")
            const minutes = Math.floor(duration.asMinutes())
            const seconds = Math.floor(duration.seconds())

            const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
            setLeftTime(formattedTime)
        }, 500)
        const updateWatchTime = event.target.playerInfo.currentTime
        if (updateWatchTime) dispatch(addTime({ id, time: updateWatchTime }))
    }
    const onReady: YouTubeProps["onReady"] = (event) => {
        setLeftTime(moment.duration(totalTime).format("mm:ss", { trim: false }))
    }
    const startTime = useMemo(() => playingTime, [])

    useEffect(() => {
        return () => {
            if (timeRef.current) clearInterval(timeRef.current)
        }
    }, [])
    return { onStateChange, startTime, leftTime, onReady }
}

export default useCacheVideoTime
