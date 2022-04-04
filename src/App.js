
import useRandomJoke from './useRandomJoke';
import React, {useState} from 'react'

function App() {

  const joke = useRandomJoke('Jim', 'Halpert');

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const generateJoke = e =>{
    e.preventDefault();
    
  }

  return (
    <div className="app">
      <center>
        <h1>Joke Generator</h1>
        <h1>Here's a cool one for you...</h1>
        <h2>{joke}</h2>

        <h3>Wanna add up your name? Just fill in your details.</h3>
        <form>
          <input placeholder="firstname" value= {firstName} onChange={e => setFirstName(e.target.value)}/>
          <input placeholder="lastname" value = {lastName} onChange={e => setLastName(e.target.value)}/>
        </form>
        <button onClick={generateJoke}>Generate</button>

      </center>
    </div>
  );
}

export default App;
