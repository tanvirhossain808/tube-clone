import { addItem } from "@/store/SearchSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useGetYouTubeVideosList = () => {
    // const videosData
    const dispatch = useDispatch()
    const videos = useSelector((state: any) => state.cart.items[0])
    const videosData = async (nextPageToken?: string) => {
        try {
            const videos = await fetch("/api/video")
            const { data } = await videos.json()
            if (data.items.length) {
                dispatch(addItem(data))
            }
        } catch (error) {
            console.log(error)
        }
        console.log(videos);
        return { "videosData": "name" }

    }


    useEffect(() => {
        videosData()
    }, [])
    return { videos }
}
export default useGetYouTubeVideosList