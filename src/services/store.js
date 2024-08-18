import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

//configure store to reduce state to use only the needed articleApi
//go to - redux toolkit store

export const store = configureStore({
    reducer: {                        
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(articleApi.middleware) 
});