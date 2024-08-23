import React from 'react';
import './MovieCard.css';
import { MdDeleteForever } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const MovieCard = ({ movie, onDelete, onToggleLike }) => {
  const { title, category, likes, dislikes, liked } = movie;
  const total = likes + dislikes;
  const ratio = total > 0 ? (likes / total) * 100 : 0;

  return (
    <div className='movie-card'>
      <h3 className='movie-title'>{title}</h3>
      <p className='movie-categorie'><strong>Catégorie:</strong> <span className='movie-name-categorie'>{category}</span></p>
      <div className='rating-bar'>
        <div style={{ width: `${ratio}%` }} className='rating-bar-like'></div>
        <div style={{ width: `${100 - ratio}%` }} className='rating-bar-dislike'></div>
      </div>
      <button className='movie-btn-delete' onClick={() => onDelete(movie.id)}>Supprimer<MdDeleteForever className='icon-delete'/></button>
      <button 
        className='movie-btn-like'
        onClick={() => onToggleLike(movie.id)}
        style={{ backgroundColor: liked ? 'red' : 'green', color: liked ? 'white' : 'white' }}
      >
        {liked ? (
        <>
        J'aime pas <SlDislike className='icon-like'/>
        </>
        ) : (
        <>
        J'aime <SlLike className='icon-like'/>
        </>
        )} 
        ({likes}
        )
      </button>
    </div>
  );
};

export default MovieCard;


