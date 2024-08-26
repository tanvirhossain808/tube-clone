import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CartType, YouTubeVideoItem } from "@/lib/globalType";
import { FC, useState, useEffect, useRef } from "react";
import Thumbnail from "./ui/Thumbnail";
import VideoPlayer from "./ui/VideoPlayer";
import useShowHoverVideo from "@/hooks/UseShowHoverVideo";
import { useSelector } from "react-redux";
import moment from "moment";
import 'moment-duration-format'

const CardContainer: FC<YouTubeVideoItem> = ({ snippet, contentDetails, statistics, id }) => {
    const playingTime = useSelector((state: CartType) => {
        return state.cart.currentTime[id] ? state.cart.currentTime[id] : 0;
    }
    )


    const { tags, thumbnails } = snippet;
    const { duration } = contentDetails;
    const { viewCount, likeCount, commentCount } = statistics || {};
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const showVideo = useShowHoverVideo(isHovered)
    const totalTime = moment.duration(duration).format('mm:ss', { trim: false })

    return (
        <Card
            className="w-full h-full bg-rd-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader>
                <CardTitle>{snippet.title}</CardTitle>
                <CardDescription>{snippet.description}</CardDescription>
            </CardHeader>
            <CardContent className="w-full h-full">
                {showVideo ? (
                    <VideoPlayer id={id} {...thumbnails.standard} playingTime={playingTime} />
                ) : (
                    <Thumbnail {...thumbnails} />
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                {
                    totalTime
                }
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
};

export default CardContainer;
