import { configureStore } from '@reduxjs/toolkit';

import { posts } from './posts';

export { useGetPostsQuery, useGetPostQuery } from './posts';

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(posts.middleware),
});
