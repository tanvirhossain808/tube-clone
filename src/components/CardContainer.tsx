import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import formateViews from "../utils/formateVies"
import { CartType, YouTubeVideoItem } from "@/lib/globalType"
import { FC, useState, useEffect, useRef } from "react"
import Thumbnail from "./ui/Thumbnail"
import VideoPlayer from "./ui/VideoPlayer"
import useShowHoverVideo from "@/hooks/UseShowHoverVideo"
import { useSelector } from "react-redux"
import moment from "moment"
import "moment-duration-format"
import formatUploadedDay from "@/utils/formateUploadedDay"
import { useRouter } from "next/navigation"

const CardContainer: FC<YouTubeVideoItem> = ({
    snippet,
    contentDetails,
    statistics,
    id,
}) => {
    const playingTime = useSelector((state: CartType) => {
        return state.cart.currentTime[id] ? state.cart.currentTime[id] : 0
    })
    const router = useRouter()

    const { thumbnails, publishedAt, title } = snippet

    const { duration } = contentDetails
    const { viewCount = 0, likeCount, commentCount } = statistics || {}
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const showVideo = useShowHoverVideo(isHovered)
    const totalTime = moment.duration(duration).format("mm:ss", { trim: false })

    const handleClickVideo = () => {
        router.push(`/watch?v=${id}`)
    }

    return (
        <Card
            className="w-full h-[400px] bg-rd-800 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClickVideo}
        >
            <CardContent className="">
                {showVideo ? (
                    <VideoPlayer
                        id={id}
                        {...thumbnails.standard}
                        playingTime={playingTime}
                        totalTime={duration}
                    />
                ) : (
                    <Thumbnail {...thumbnails} totalTime={totalTime} />
                )}
            </CardContent>
            <CardTitle>{title}</CardTitle>
            <CardFooter className="flex justify-between">
                <div className=" flex items-center gap-1  text-[#ffffff91]">
                    <div>{formateViews(viewCount)}</div>
                    <div className="h-1 w-1 rounded-full bg-[#ffffff91]"></div>
                    <div>{formatUploadedDay(publishedAt)}</div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CardContainer
