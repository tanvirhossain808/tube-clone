import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./videoSlice"
import nextPageToken from "./nextPageTokenSlice"
import searchCacheSlice from "./searchCacheSlice"
import commentsSlice from "./commentsSlice"

const appStore = configureStore({
    reducer: {
        cart: searchReducer,
        nextPageToken: nextPageToken,
        searchCache: searchCacheSlice,
        comments: commentsSlice,
    },
})

export default appStore
