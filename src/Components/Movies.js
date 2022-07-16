import React, { useState } from 'react';

function Movies({movis}) {
  const movies = [{"id": 51, "title": "Bad Man", "rating": 5, "cast":"Nick", "des":"W long storay"},
  {"id": 51, "title": "Bad Woman", "rating": 7, "cast":"Nicky", "des":"very long storay"}
  ];
  
  
  return (
    {movies.map(movie) => {
      <div>
        <h3 id={movie.id}>{movie.title}</h3>
        <span>{movie.rating}/10</span>
        <img src={movie.poster} alt={movie.title} />
        <h4>{movie.cast}</h4>
        <p>{movie.des}</p>
      </div>
    }
    )
    }
    )
}
