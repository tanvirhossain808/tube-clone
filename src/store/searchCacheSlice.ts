import { SearchCacheProps } from "@/lib/globalType"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState: {
    [key: string]: SearchCacheProps[]
} = {}
const searchCacheSlice = createSlice({
    name: "searchCache",
    initialState,
    reducers: {
        addSearchCache: (
            state,
            action: PayloadAction<{
                searchKey: string
                searchRes: SearchCacheProps[]
            }>
        ) => {
            const { searchKey, searchRes } = action.payload
            state[searchKey] = searchRes
        },
        removeParticularCache: (
            state,
            action: PayloadAction<{
                searchKey: string
                removableItemId: number
            }>
        ) => {
            const { searchKey, removableItemId } = action.payload
            const currentSearchResult = state[searchKey]
            state[searchKey] = currentSearchResult.filter(
                (searchRes) => searchRes.id !== removableItemId
            )
        },

        removeSearchCache: (state) => {
            return {}
        },
    },
})

export const { addSearchCache, removeSearchCache, removeParticularCache } =
    searchCacheSlice.actions
export default searchCacheSlice.reducer
