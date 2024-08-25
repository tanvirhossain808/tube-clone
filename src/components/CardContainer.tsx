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
import { FC, useState } from "react";
import VideoPlayer from "./ui/VideoPlayer";
import Thumbnail from "./ui/Thumbnail";



const CardContainer: FC<YouTubeVideoItem> = ({ snippet, contentDetails, statistics, id }) => {
    const { tags, thumbnails } = snippet
    const { duration } = contentDetails
    const videoId = id
    const { viewCount, likeCount, commentCount } = statistics || {}

    const [isHovered, setIsHovered] = useState<boolean>(false)
    return (
        <Card className="w-full bg-rd-800" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
                {
                    isHovered ?
                        <VideoPlayer id={id} {...thumbnails.standard} /> :
                        < Thumbnail {...thumbnails} />
                }
                {/* < Thumbnail {...thumbnails} /> */}
                {/* <VideoPlayer id={id} {...thumbnails.standard} /> : */}

            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
};

export default CardContainer;
