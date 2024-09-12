import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Comment, YouTubeSearchResponse } from "@/lib/globalType" // Import your YouTubeSearchResponse type

interface CommentsProps {
    comments: {
        id: number
    }[]
}

/* 
{
    "channelId": "UCq_7HCsiy115mre6OBH_dAQ",
    "videoId": "81ktpexWqyI",
    "textDisplay": "जय श्रीराम",
    "textOriginal": "जय श्रीराम",
    "authorDisplayName": "@vijaythakur6108",
    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lpoFJkOEagWANB1SxPohTLLrb1RiDf694axjp2bVE=s48-c-k-c0x00ffffff-no-rj",
    "authorChannelUrl": "http://www.youtube.com/@vijaythakur6108",
    "authorChannelId": {
        "value": "UCnQH-DQyewwduiPUnNf49CA"
    },
    "canRate": true,
    "viewerRating": "none",
    "likeCount": 0,
    "publishedAt": "2024-09-11T23:41:19Z",
    "updatedAt": "2024-09-11T23:41:19Z"
} */

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
