import useRandomJoke from './useRandomJoke';
import React from 'react'

function App() {

  const joke = useRandomJoke('Jim', 'Halpert');

  

  return (
    <div className="app">
      <center>
        <h1>Joke Generator</h1>
        <button>Generate</button>

        <h1>Here's a cool one for you...</h1>
        <h2>{joke}</h2>
      </center>
    </div>
  );
}

export default App;
