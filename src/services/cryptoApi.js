import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "f5e153c0c6msh29f2bdb7028b126p1fe0f5jsn3fa25ffd5423",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
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
