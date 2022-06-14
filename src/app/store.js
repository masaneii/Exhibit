import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from '../redux/collectionReducer/collectionSlice';

export const store = configureStore({
  reducer: {
    collection: collectionReducer
  },
});
