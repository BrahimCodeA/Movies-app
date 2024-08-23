import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    filter: [],
    page: 1,
    pageSize: 4
  },
  reducers: {
    setMovies(state, action) {
      state.list = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    toggleLike(state, action) {
      const movie = state.list.find(movie => movie.id === action.payload);
      if (movie) {
        movie.liked = !movie.liked;
        if (movie.liked) {
          movie.likes += 1;
        } else {
          movie.likes = Math.max(movie.likes - 1, 0);
        }
      }
    }
  }
});

export const { setMovies, setFilter, setPage, setPageSize, toggleLike } = moviesSlice.actions;
export default moviesSlice.reducer;

