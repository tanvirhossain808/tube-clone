// "use client"
import VideoPlayer from "../ui/VideoPlayer"
import WatchSuggestionPart from "./WatchSuggestionPart"
import { YouTube, YouTubeProps } from "../../utils/ExportLib/ExportLib"
import Image from "next/image"
import { avatar } from "../../../constant/image"

const WatchIframe = ({
    id,
    title,
    channelName,
}: {
    id: string
    title: string
    channelName: string
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
        <div className="min-h-screen w-full">
            <YouTube videoId={id} opts={opts} />
            <h3 className={` text-2xl ${!title && "text-center"}`} text-2xl>
                {title}
            </h3>
            <div>
                <div>
                    <Image
                        src={avatar}
                        width={400}
                        height={400}
                        alt="Avatar images"
                        className="rounded-full w-10 h-10"
                    />
                    <div>
                        <h4>{channelName}</h4>
                        <p>Subscriber number</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchIframe
