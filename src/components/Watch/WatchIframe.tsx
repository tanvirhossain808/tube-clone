// "use client"
import VideoPlayer from "../ui/VideoPlayer"
import WatchSuggestionPart from "./WatchSuggestionPart"
import { YouTube, YouTubeProps } from "../../utils/ExportLib/ExportLib"
import Image from "next/image"
import { avatar } from "../../../constant/image"
import formateStatisticsCount from "@/utils/formateStatisticsCount"
import { FaAngleDown, FaBell } from "react-icons/fa"
import CommentForm from "../Comments/CommentForm"
import CommentsContainer from "../CommentsContainer"
import { TopLevelComment } from "@/lib/globalType"

const WatchIframe = ({
    id,
    title,
    channelName,
    thumbnailsUrl,
    statistics,
    commentsInfo,
}: {
    id: string
    title: string
    channelName: string
    thumbnailsUrl: string
    statistics?: { subscriberCount: number }
    commentsInfo?: TopLevelComment
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
    if (commentsInfo === undefined) return
    return (
        <div className="min-h-screen w-full ">
            <YouTube videoId={id} opts={opts} />
            <h3 className={` text-2xl ${!title && "text-center"}`} text-2xl>
                {title}
            </h3>
            <div className="flex items-center gap-3 cursor-pointer mt-3">
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
                <div className="flex gap-2 ml-6 bg-[#3F3F3F] rounded-3xl p-2">
                    <FaBell size={30} />
                    <p>Subscribed</p>
                    <FaAngleDown size={20} />
                </div>
            </div>
            <div className="mt-10">
                <div>
                    <CommentForm isVisible={true} />
                </div>
                <div>
                    {commentsInfo.map((comment) => (
                        <CommentsContainer key={id} {...comment} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WatchIframe
