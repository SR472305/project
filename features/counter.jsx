import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter : 0},
    reducers: {
        increment : (state) => {
            state.counter += 1;
        },
        decrement : (state) => {
            state.counter -= 1;
        },
        reset : (state) => {
            state.counter = 0;
        }
    }
});

console.log(counterSlice);
console.log(counterSlice.actions);


export const {increment , decrement ,reset} = counterSlice.actions;
export default counterSlice.reducer;