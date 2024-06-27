import Pokedex from './Pokedex'
import pokemon from './pokemon.js'
import './App.css';

function App() {
  return (
    <>
      <h1 className='App-Header'>Pokedex</h1>
      <Pokedex pokemon={pokemon}/>
    </>
  );
}

export default App;
 