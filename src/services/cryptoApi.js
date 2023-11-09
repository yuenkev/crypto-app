import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
    'X-RapidAPI-Key': 'f5fdf7a61emsh1b652af1268e746p1fc3a7jsn261680a6f8e6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;
