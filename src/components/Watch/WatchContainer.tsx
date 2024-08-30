"use client"
import VideoPlayer from "../ui/VideoPlayer"
import WatchIframe from "./WatchIframe"
import WatchSuggestionPart from "./WatchSuggestionPart"

const WatchContainer = ({ id }: { id: string }) => {
    return (
        <div>
            <WatchIframe id={id} />
            {/* <WatchSuggestionPart />/ */}
        </div>
    )
}

export default WatchContainer
