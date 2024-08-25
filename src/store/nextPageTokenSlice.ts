import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: { pageToken: string } = {
    pageToken: ""
}
const nextPageTokenSlice = createSlice({
    name: "nextPageToken",
    initialState,
    reducers: {
        updateToken: (state, action: PayloadAction<string>) => {
            state.pageToken = action.payload
        }
    }
})

export const { updateToken } = nextPageTokenSlice.actions
export default nextPageTokenSlice.reducer