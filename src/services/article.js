import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//part of global store
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const articleApi = createApi({
    reducerPath: 'articleApi',
    //ask to fetch api
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        // key and host passwords found from rapid api (Article Extraxtor and summarizer)
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', rapidApiKey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
            
            return headers;
        }
    }), 

    //setup the endpoints we pull from the api
    endpoints: (builder) => ({
        getSummary: builder.query({ //use this encoding for special characters
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        })
    })
});

//fire hook on demand vs on load
export const { useLazyGetSummaryQuery } = articleApi