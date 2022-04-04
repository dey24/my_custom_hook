
import useRandomJoke from './useRandomJoke';
import React, {useState, useRef} from 'react'

function App() {

  
  const [firstName, setFirstName] = useState("Raja");
  const [lastName, setLastName] = useState("Dey");
  const joke = useRandomJoke(firstName, lastName);
  
  const generateJoke = e =>{
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);

  }

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  return (
    <div className="app">
      <center>
        <h1>Joke Generator</h1>
        <h1>Here's a cool one for you...</h1>
        <h2>{joke}</h2>

        <h3>Wanna add up your name? Just fill in your details.</h3>
        <form>
          <input placeholder="firstname" ref = {firstNameRef}/>
          <input placeholder="lastname" ref = {lastNameRef}/>
        </form>
        <button onClick={generateJoke}>Generate</button>

      </center>
    </div>
  );
}

export default App;
