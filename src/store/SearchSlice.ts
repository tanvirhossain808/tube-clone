import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type of your state
interface searchState {
    items: string[]; // Adjust the type based on the items (could be an array of objects, strings, etc.)
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
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload); // action.payload is now typed as a string
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
