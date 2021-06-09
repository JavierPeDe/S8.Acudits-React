import axios from 'axios';
import { useState } from 'react';
import '../App.css';

function JokeContainer() {
  const [apiJoke, setApiJoke] = useState('');
  const onClickChange = () => {
    axios.get('https://api.chucknorris.io/jokes/random').then((apiData) => {
      console.log(apiData.data.value);
      setApiJoke(() => apiData.data.value);
    });
  };
  return (
    <div className="JokeContainerCss ">
      <h1 className="JokeTitle">Preparat per riure? 🤣</h1>
      <p className="Joke">{apiJoke}</p>
      <button
        className="btn btn-outline-info btn-lg btn-block w-50"
        onClick={onClickChange}
      >
        Següent acudit
      </button>
    </div>
  );
}

export default JokeContainer;
