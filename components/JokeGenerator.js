import { useState } from 'react';
import getJoke from '../api/jokeData';

function Joker() {
  const [tell, setTell] = useState({});

  const [laugh, setLaugh] = useState('Get a Joke');

  const clicker1 = () => {
    if (laugh === 'Get a Joke') {
      getJoke().then(setTell).then(() => {
        setLaugh('???');
      });
    } else if (laugh === 'How bout another?') {
      getJoke().then(setTell).then(() => {
        setLaugh('???');
      });
    } else if (laugh === '???') {
      setLaugh('How bout another?');
    }
  };

  return (
    <>
      <h1>{laugh === 'Get a Joke' ? '' : tell.setup}</h1>
      <h1>{laugh === 'How bout another?' ? tell.delivery : ''}</h1>
      <button type="button" onClick={clicker1}>{laugh}</button>
    </>
  );
}

export default Joker;
