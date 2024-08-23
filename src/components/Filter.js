import React, { useEffect, useState } from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './slices/moviesSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(movies.map(movie => movie.category))];
    setCategories(uniqueCategories);
  }, [movies]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories(prev => {
      const newSelection = checked 
        ? [...prev, value] 
        : prev.filter(category => category !== value);
      dispatch(setFilter(newSelection));
      return newSelection;
    });
  };

  return (
    <div className="filter">
      <h3 className='filter-title'>Catégorie</h3>
      {categories.map(category => (
        <div key={category}>
          <label>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;

