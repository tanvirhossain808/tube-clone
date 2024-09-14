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

    const videoLists = async () => {
        const q = videoInfo?.snippet?.tags?.[0] || (await getVideoInfo(id))
        console.log(q, "after")
        const videos = await axios.post("api/videoSearch", { q })
        dispatch(addVideoSuggestion(videos.data.data))
    }
    useEffect(() => {
        const getData = async () => {
            await videoLists()
        }
        getData()
    }, [id])
}

export default useGetVideoSearchList

export const getVideoInfo = async (id: string) => {
    const data = await axios.post("/api/videoInfo", {
        id,
    })
    console.log(data)
    if (data?.data?.data?.tags?.length > 0) return data.data.data.tags[0]
    return "random"
}
