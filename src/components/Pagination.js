import React from 'react';
import './Pagination.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPageSize } from './slices/moviesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, pageSize, list } = useSelector(state => state.movies);

  const totalMovies = list.length;
  const totalPages = Math.ceil(totalMovies / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };

  const handlePageSizeChange = (event) => {
    dispatch(setPageSize(Number(event.target.value)));
    dispatch(setPage(1)); 
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
        Précédent
      </button>
      <span>Page {page} / {totalPages}</span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages}>
        Suivant
      </button>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
    </div>
  );
};

export default Pagination;
