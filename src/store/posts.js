import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { api } from '../api';

export const posts = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = posts;
