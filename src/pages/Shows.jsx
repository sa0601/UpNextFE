// Shows.jsx

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../components/Post';

const Shows = () => {
  const shows = useLoaderData();

  return (
    <div className="cards-container">
      {shows.map((show) => (
        <Post key={show.id} post={show} />
      ))}
    </div>
  );
};

export default Shows;
