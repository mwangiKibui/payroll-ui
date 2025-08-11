
import type { Joke } from "../../types/Joke";
import type { JokeState } from "./JokeSlice";


// global state access by using rootstate type
export const getJokes = (state: JokeState):Array<Joke> => state.jokes;