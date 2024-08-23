import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";

const appStore = configureStore({
    reducer: {
        cart: searchReducer,
    },
});

export default appStore;