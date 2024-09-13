import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./videoSlice"
import nextPageToken from "./nextPageTokenSlice"
import searchCacheSlice from "./searchCacheSlice"
import commentsSlice from "./commentsSlice"
import videoSearchSlice from "./videoSearchSlice"

const appStore = configureStore({
    reducer: {
        cart: searchReducer,
        nextPageToken: nextPageToken,
        searchCache: searchCacheSlice,
        comments: commentsSlice,
        videoSearch: videoSearchSlice,
    },
})

export default appStore
