import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"x-rapidapi-host": process.env.REACT_APP_API_HOST,
	"x-rapidapi-key": process.env.REACT_APP_API_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (cardCount) => createRequest(`/coins?limit=${cardCount}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timePeriod }) =>
				createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
		}),
		getCryptoExchanges: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}/exchanges`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
	useGetCryptoExchangesQuery,
} = cryptoApi;
