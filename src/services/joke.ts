import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type { Joke } from '../types/Joke';

// define a service using the base url and endpoints.
export const jokesApi = createApi({
    reducerPath: 'jokeApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://v2.jokeapi.dev/joke/'}),
    endpoints: (builder) => ({
        getAnyJoke: builder.query<Joke,string> ({
            query: (title:string) => title
        })
    })
});

// Export the auto generated hooks based on the defined endpoints.

export const {useGetAnyJokeQuery} = jokesApi;