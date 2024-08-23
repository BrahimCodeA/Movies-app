import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './components/slices/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export default store;
