import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import jokeReducer from '../features/joke/JokeSlice';
import {jokesApi} from '../services/joke';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
    reducer: {
        // add the auto generated reducer.
        [jokesApi.reducerPath]: jokesApi.reducer,
        counter:counterReducer,
        joke:jokeReducer
    },
    // add an api middleware that enables caching, invalidation, polling, and other useful features from rtk-query
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jokesApi.middleware)
});
export type RootState = ReturnType<typeof store.getState> // infering the type from a return type.
export type AppDispatch = typeof store.dispatch;
// recommended for refetchOnFocus, and refetchOnReconnect
setupListeners(store.dispatch);