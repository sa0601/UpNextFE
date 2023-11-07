import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../components/Post';

const Movie = () => {
  const movies = useLoaderData();

  return (
    <div className="cards-container">
      {movies.map((movie) => (
        <Post key={movie.id} post={movie} />
      ))}
    </div>
  );
};

export default Movie;