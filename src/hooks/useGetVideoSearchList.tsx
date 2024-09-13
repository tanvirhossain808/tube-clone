/* eslint-disable react-hooks/exhaustive-deps */
import { CartType } from "@/lib/globalType"
import { addVideoSuggestion } from "@/store/videoSearchSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useGetVideoSearchList = (id: string) => {
    const dispatch = useDispatch()
    let videosList = 9
    const videoInfo = useSelector((state: CartType) =>
        state.cart?.items[0]?.items.find((videoInfo) => videoInfo.id === id)
    )
    const q = (videoInfo?.tags && videoInfo?.tags[0]) || "any"
    const videoLists = async () => {
        const videos = await axios.post("api/videoSearch", { q })
        console.log(videos.data.data, "videos")
        dispatch(addVideoSuggestion(videos.data.data))
    }
    useEffect(() => {
        videoLists()
    }, [id])
    return { videosList }
}

export default useGetVideoSearchList
