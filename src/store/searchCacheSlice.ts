import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState: {
    [key: string]: string[]
} = {}
const searchCacheSlice = createSlice({
    name: "searchCache",
    initialState,
    reducers: {
        addSearchCache: (
            state,
            action: PayloadAction<{ searchKey: string; searchRes: string[] }>
        ) => {
            const { searchKey, searchRes } = action.payload
            state[searchKey] = searchRes
        },
        removeSearchCache: (state) => {
            return {}
        },
    },
})

export const { addSearchCache, removeSearchCache } = searchCacheSlice.actions
export default searchCacheSlice.reducer
