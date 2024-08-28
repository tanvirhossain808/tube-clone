import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./videoSlice"
import nextPageToken from "./nextPageTokenSlice"
import searchCacheSlice from "./searchCacheSlice"

const appStore = configureStore({
    reducer: {
        cart: searchReducer,
        nextPageToken: nextPageToken,
        searchCache: searchCacheSlice,
    },
})

export default appStore
