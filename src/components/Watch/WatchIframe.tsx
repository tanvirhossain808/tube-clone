// "use client"
import VideoPlayer from "../ui/VideoPlayer"
import WatchSuggestionPart from "./WatchSuggestionPart"
import { YouTube, YouTubeProps } from "../../utils/ExportLib/ExportLib"

const WatchIframe = ({ id }: { id: string }) => {
    const opts: YouTubeProps["opts"] = {
        // height: 400,
        // width: 400,
        playerVars: {
            autoplay: 1,
            mute: 1,
            // start: Math.round(startTime),
        },
    }

    return (
        <div>
            <YouTube videoId={id} width={300} height={300} opts={opts} />
            id{id}
        </div>
    )
}

export default WatchIframe
