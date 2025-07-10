import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from './redux toolkit/features'
import counterSlice from './features/counter';

export const store = configureStore({
    reducer : {
        countkey : counterSlice,
    }
})