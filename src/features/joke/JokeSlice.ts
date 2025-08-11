import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type { Joke } from '../../types/Joke';

export interface JokeState {
    jokes:Array<Joke>
}

const initialState: JokeState = {
    jokes : [
        {
            error:false,
            category:"political",
            type:"political",
            setup:"why is ruto's government having issues?",
            delivery:"it is wantam",
            Flags:{
                nsfw:false,
                religious:false,
                political:false,
                racist:false,
                sexist:false,
                explicit:false
            },
            id:4,
            safe:true,
            lang:"en-us"
        }
    ]
}

export const jokeSlice = createSlice({
    name:"joke",
    initialState,
    reducers:{
        addJoke:(state,action:PayloadAction<Joke>) => {
            state.jokes.push(action.payload);
        },
        removeJoke:(state,action:PayloadAction<number>) => {
            state.jokes = state.jokes.filter(joke => joke.id != action.payload);
        },
        editJoke:(state,action:PayloadAction<Joke>) => {
            state.jokes = state.jokes.map(joke => {
                if(joke.id == action.payload.id)
                {
                    return {
                        ...action.payload
                    }
                }
                return {
                    ...joke
                }
            })
        }
    }
});

export const {addJoke,removeJoke,editJoke} = jokeSlice.actions;
export default jokeSlice.reducer;