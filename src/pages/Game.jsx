// Game.jsx

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../components/Post';

const Game = () => {
  const games = useLoaderData();

  return (
    <div className="cards-container">
      {games.map((game) => (
        <Post key={game.id} post={game} />
      ))}
    </div>
  );
};

export default Game;
