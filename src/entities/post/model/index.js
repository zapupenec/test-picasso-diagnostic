import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api, routes } from '../../../shared';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit = '') => routes.api.posts(limit),
    }),
    getPost: builder.query({
      query: (id) => routes.api.post(id),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postApi;
