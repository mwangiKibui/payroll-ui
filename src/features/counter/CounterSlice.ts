import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

// define the type of the state.
export interface CounterState{
    value:number
}

// define the state.
const initialState: CounterState =
{
    value:0
}

// define the slice (defines the reducer,state, and also introduces mutability)
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state) => {
            // mutating state because of the immer library
            state.value += 1
        },
        decrement:(state) => {
            state.value -= 1
        },
        incrementByAmount:(state,action:PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer; // exporting the reducer.