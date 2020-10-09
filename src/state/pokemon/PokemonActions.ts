import {Dispatch} from 'redux';
import {PokemonDispatchTypes, PokemonE} from "./PokemonActionTypes";
import axios from 'axios';

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: PokemonE.loading
    });

    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch({
      type: PokemonE.success,
      payload: {
        abilities: data.abilities,
        sprites: data.sprites,
        stats: data.stats
      }
    });
  } catch(e) {
    console.error(e);
    dispatch({
      type: PokemonE.fail
    });
  }
}
