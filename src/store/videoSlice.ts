import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeSearchResponse } from "@/lib/globalType"; // Import your YouTubeSearchResponse type


type CurrentTimeProps = {
    [key: string]: number
}

interface searchState {
    items: YouTubeSearchResponse[];
    currentTime: CurrentTimeProps
}
interface AddTimeProps {
    id: string, time: number
}

const initialState: searchState = {
    items: [],
    currentTime: {}
};

const videoSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction<YouTubeSearchResponse>) => {
            state.items = [action.payload]
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
            { state.items = [] };
        },
        addTime: (state, action: PayloadAction<AddTimeProps>) => {
            const { id, time } = action.payload
            state.currentTime[id] = time
        },
        clearTime: (state) => {
            state.currentTime = {}
        }
    },
});

export const { addItem, removeItem, clearCart, addTime } = videoSlice.actions;
export default videoSlice.reducer;
