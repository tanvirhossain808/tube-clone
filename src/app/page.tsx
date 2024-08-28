"use client"
import CardContainer from "@/components/CardContainer"
import useGetYouTubeVideosList from "@/hooks/useGetYouTubeVideosList"
import { YouTubeVideoItem } from "@/lib/globalType"
import axios from "axios"

export default function Home() {
    const { videos } = useGetYouTubeVideosList()
    const { items } = videos || {}

    console.log(videos)
    const loading = <div>this is for loading</div>

    !items && <div>Loading</div>

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {items?.map((video: YouTubeVideoItem) => (
                    <CardContainer key={video.id} {...video} />
                ))}
            </div>
            {/*   <div className="grid grid-cols-auto-fit gap-4">
                {items?.map((video: YouTubeVideoItem) => (
                    <CardContainer key={video.id} {...video} />
                ))}
            </div> */}
        </>
    )
}
