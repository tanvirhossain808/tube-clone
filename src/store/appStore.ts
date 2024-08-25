import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./videoSlice";
import nextPageToken from "./nextPageTokenSlice"

const appStore = configureStore({
    reducer: {
        cart: searchReducer,
        nextPageToken: nextPageToken,
    },
});

export default appStore;