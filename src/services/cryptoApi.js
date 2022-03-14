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
	}),
});

export const { useGetCryptosQuery } = cryptoApi;

/*/ Bing news search api endpoint...
var options = {
	method: "GET",
	url: "https://bing-news-search1.p.rapidapi.com/news",
	params: { safeSearch: "Off", textFormat: "Raw" },
	headers: {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "f5e153c0c6msh29f2bdb7028b126p1fe0f5jsn3fa25ffd5423",
	},
};
*/
