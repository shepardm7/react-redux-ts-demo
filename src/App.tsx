import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./Store";
import {getPokemon} from "./state/pokemon/PokemonActions";

function App() {
  const dispatch = useDispatch();
  const pokemonState = useSelector((s: RootStore) => s.pokemon);
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setPokemonName(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getPokemon(pokemonName));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <button>Search</button>
      </form>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="pokemon img"/>
            {pokemonState.pokemon.abilities.map(item => (
              <p>{item.ability.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
