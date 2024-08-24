import { addItem } from "@/store/SearchSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetYouTubeVideosList = () => {
    const dispatch = useDispatch()
    const videosData = async (nextPageToken?: string) => {
        const videos = await fetch("/api/video")
        const { data } = await videos.json()
        console.log(videos);
        if (data.items.length) {
            dispatch(addItem(data))
        }
        // const api = process.env.NEXT_PUBLIC_YOU_TUBE_VIDEO_API
        // if (!nextPageToken && api) {
        //     try {
        //         const response = await axios.get(api, {
        //             params: {
        //                 part: 'snippet',
        //                 type: 'video',
        //                 q: 'React.js',
        //                 maxResults: 50,
        //                 key: process.env.NEXT_PUBLIC_TUBE_AUTH_TOKEN
        //             },
        //         });
        //         console.log(response);
        //     }
        //     catch (error: any) {
        //         console.log(error)
        //     }

        // }
        // console.log(process.env.NEXT_PUBLIC_TUBE_AUTH_TOKEN);

        return { "videosData": "name" }

    }
    useEffect(() => {
        videosData()
    }, [])
}
export default useGetYouTubeVideosList