import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeSearchResponse } from "@/lib/globalType"; // Import your YouTubeSearchResponse type

// Define the type of your state
interface searchState {
    items: YouTubeSearchResponse[]; // Adjust the type based on your data structure
}

// Define the initial state using the searchState type
const initialState: searchState = {
    items: [],
};

const searchSlice = createSlice({
    name: "cart", // Adjusted name for clarity
    initialState,
    reducers: {
        // Define the type of the payload for addItem action
        addItem: (state, action: PayloadAction<YouTubeSearchResponse>) => {
            state.items = [action.payload] // action.payload is now typed as YouTubeSearchResponse
        },
        // No need for a payload in removeItem, so we don't need to type it
        removeItem: (state) => {
            state.items.pop();
        },
        // clearCart doesn't require a payload
        clearCart: (state) => {
            return { items: [] }; // Returning a new state object with an empty array
        },
    },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart } = searchSlice.actions;
export default searchSlice.reducer;
