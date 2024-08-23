import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MovieCard from './components/MovieCard';
import { setMovies, toggleLike } from './components/slices/moviesSlice';
import { movies$ } from './components/data/movies';
import Filter from './components/Filter';
import Pagination from './components/Pagination';


const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list);
  const filter = useSelector(state => state.movies.filter);
  const page = useSelector(state => state.movies.page);
  const pageSize = useSelector(state => state.movies.pageSize);

  useEffect(() => {
    movies$.then(fetchedMovies => {
      dispatch(setMovies(fetchedMovies));
    });
  }, [dispatch]);

  const filteredMovies = filter.length
    ? movies.filter(movie => filter.includes(movie.category))
    : movies;

  const startIndex = (page - 1) * pageSize;
  const paginatedMovies = filteredMovies.slice(startIndex, startIndex + pageSize);

  const handleDelete = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id);
    dispatch(setMovies(updatedMovies));
  };

  const handleToggleLike = (id) => {
    dispatch(toggleLike(id));
  };

  return (
    <div className="app">
      <div className='app-header'>
        <h1 className='app-title'>Films</h1>
      <Filter />
      <div className="movie-list">
        {paginatedMovies.length > 0 ? (
          paginatedMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={handleDelete}
              onToggleLike={handleToggleLike}
            />
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
      <Pagination />
    </div>
    </div>
  );
};

export default App;


