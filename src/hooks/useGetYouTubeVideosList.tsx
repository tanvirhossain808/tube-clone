/* eslint-disable react-hooks/exhaustive-deps */

import { CartType, YouTubeSearchResponse } from "@/lib/globalType"
import { updateToken } from "@/store/nextPageTokenSlice"
import { addItem } from "@/store/videoSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
const useGetYouTubeVideosList = () => {
    // const videosData
    const dispatch = useDispatch()
    const videos = useSelector((state: CartType) => state?.cart?.items[0])
    const videosData = async (nextPageToken?: string) => {
        try {
            const videos = await fetch("/api/video")
            const { data, response } = await videos.json()
            // console.log(response, "response");
            if (data.items.length) {
                dispatch(addItem(data))
                dispatch(updateToken(data.nextPageToken))
            }
        } catch (error: any) {
            console.log(error)
        }
        return { videosData: "name" }
    }

    useEffect(() => {
        videosData()
    }, [])
    return { videos }
}
export default useGetYouTubeVideosList
