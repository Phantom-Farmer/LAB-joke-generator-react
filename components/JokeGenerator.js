import { useState } from 'react';
import getJoke from '../api/jokeData';

function Joker() {
  const [tell, setTell] = useState();
  const [laugh, setLaugh] = useState();
  const clicker1 = () => {
    getJoke().then((joke) => setTell(joke.setup));
  };
  const clicker2 = () => {
    getJoke().then((joke) => setLaugh(joke.delivery));
  };

  return (
    <>
      <h1>{tell}</h1>
      <h1>{laugh}</h1>
      <button type="button" onClick={clicker1}>Get a Joke</button>
      <button type="button" onClick={clicker2}>Bahahahaha!</button>
    </>
  );
}

export default Joker;
