import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Comment, YouTubeSearchResponse } from "@/lib/globalType" // Import your YouTubeSearchResponse type

interface CommentsProps {
    comments: {
        id: number
    }[]
}

const initialState: Comment[] = [
    {
        videoId: "",
        id: "",
        author: "",
        textDisplay: "",
        publishedAt: new Date().toISOString(),
        likeCount: 0,
        authorDisplayName: "",
        authorProfileImageUrl: "",
        authorChannelUrl: "",
        replies: [],
    },
]

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        // addItem: (state, action: PayloadAction<YouTubeSearchResponse>) => {
        //     state.items = [action.payload]
        // },
        addComments: (state, action: PayloadAction<Comment[]>) => {
            return action.payload
        },
    },
})

export const { addComments } = commentSlice.actions
export default commentSlice.reducer
