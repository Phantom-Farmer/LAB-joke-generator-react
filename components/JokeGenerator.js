import React from 'react';
import getJoke from '../api/jokeData';

function Joker() {
  const clicker1 = () => {
    getJoke().then((joke) => (joke.setup));
  };
  return (
    <>
      <button type="button" onClick={clicker1}>Get a Joke</button>
    </>
  );
}

export default Joker;
