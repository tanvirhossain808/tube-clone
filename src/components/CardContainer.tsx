import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { YouTubeVideoItem } from "@/lib/globalType";
import { FC, useState, useEffect, useRef } from "react";
import Thumbnail from "./ui/Thumbnail";
import VideoPlayer from "./ui/VideoPlayer";
import useShowHoverVideo from "@/hooks/UseShowHoverVideo";

const CardContainer: FC<YouTubeVideoItem> = ({ snippet, contentDetails, statistics, id }) => {
    const { tags, thumbnails } = snippet;
    const { duration } = contentDetails;
    const { viewCount, likeCount, commentCount } = statistics || {};
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const showVideo = useShowHoverVideo(isHovered)

    console.log(showVideo, "showVideo");
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
                    <VideoPlayer id={id} {...thumbnails.standard} />
                ) : (
                    <Thumbnail {...thumbnails} />
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
};

export default CardContainer;
