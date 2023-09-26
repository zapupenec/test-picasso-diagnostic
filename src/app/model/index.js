import { configureStore } from '@reduxjs/toolkit';
import { postModel } from '../../entities/post';

export const store = configureStore({
  reducer: {
    [postModel.postApi.reducerPath]: postModel.postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postModel.postApi.middleware),
});
