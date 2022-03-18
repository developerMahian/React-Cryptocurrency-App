import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
	"x-bingapis-sdk": "true",
	"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
	"x-rapidapi-key": "f5e153c0c6msh29f2bdb7028b126p1fe0f5jsn3fa25ffd5423",
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://bing-news-search1.p.rapidapi.com/news",
	}),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, newsCount, sortBy }) =>
				createRequest(
					`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${newsCount}&sortBy=${sortBy}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
