import { TopLevelCommentObj } from "@/lib/globalType"

const CommentsContainer = ({ snippet }: TopLevelCommentObj) => {
    const { topLevelComment } = snippet
    const {
        authorProfileImageUrl,
        likeCount,
        publishedAt,
        textDisplay,
        videoId,
        authorDisplayName,
    } = topLevelComment.snippet
    console.log("hey", textDisplay)
    return (
        <>
            <div>
                <p>{textDisplay}</p>
            </div>
        </>
    )
}

export default CommentsContainer
