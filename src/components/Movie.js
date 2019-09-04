import React from 'react';
import PropTypes from'prop-types'
import './Movie.css'
export default function Movie(movie){
  
  return(
    <div className="movies movie">
    <img src={movie.poster} alt={movie.title} title={movie.title} /> 
    <div className="movie__data">
      <h3 className="movie__title">{movie.title}</h3>
      <h5 className="movie__year">{movie.year}</h5>
      <ul className="movie__genres">
      {movie.genres.map((genre,index) =>(<li key={index} className="geners__genre">{genre}</li>))}
      </ul>
      <p className="movie__summary">{movie.summary.slice(0,180)}</p>
    </div>
    </div>
    )

}
Movie.PropTypes={
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired ,
  title:PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired
}