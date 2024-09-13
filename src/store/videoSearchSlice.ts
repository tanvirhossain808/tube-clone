import { VideoSearchType } from "@/lib/globalType"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState: {
    videoSuggestion: VideoSearchType[][]
    searchVideo: any
} = {
    videoSuggestion: [],
    searchVideo: [],
}
const videoSearchSlice = createSlice({
    name: "videoSearch",
    initialState,
    reducers: {
        addVideoSuggestion: (
            state,
            action: PayloadAction<VideoSearchType[]>
        ) => {
            return {
                ...state,
                videoSuggestion: [
                    ...state.videoSuggestion?.map((video) => [...video]),
                    action.payload,
                ],
            }
        },
    },
})

export const { addVideoSuggestion } = videoSearchSlice.actions

export default videoSearchSlice.reducer
