// "use client"
import VideoPlayer from "../ui/VideoPlayer"
import WatchSuggestionPart from "./WatchSuggestionPart"
import { YouTube, YouTubeProps } from "../../utils/ExportLib/ExportLib"
import Image from "next/image"
import { avatar } from "../../../constant/image"
import formateStatisticsCount from "@/utils/formateStatisticsCount"

const WatchIframe = ({
    id,
    title,
    channelName,
    thumbnailsUrl,
    statistics,
}: {
    id: string
    title: string
    channelName: string
    thumbnailsUrl: string
    statistics?: { subscriberCount: number }
}) => {
    const opts: YouTubeProps["opts"] = {
        height: "500",
        // width: 400,
        width: "100%",
        playerVars: {
            autoplay: 1,
            mute: 1,
            // start: Math.round(startTime),
        },
    }

    return (
        <div className="min-h-screen w-full ">
            <YouTube videoId={id} opts={opts} />
            <h3 className={` text-2xl ${!title && "text-center"}`} text-2xl>
                {title}
            </h3>
            <div className="flex items-center gap-3 cursor-pointer">
                <Image
                    src={thumbnailsUrl || avatar}
                    width={400}
                    height={400}
                    alt="Avatar images"
                    className="rounded-full w-12 h-12"
                />
                <div>
                    <h4>{channelName}</h4>
                    <p className="text-xs text-gray-400 mt-1">
                        {formateStatisticsCount(
                            Number(statistics?.subscriberCount)
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WatchIframe
