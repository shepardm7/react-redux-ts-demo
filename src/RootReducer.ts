import { combineReducers } from 'redux';
import PokemonReducer from "./state/pokemon/PokemonReducer";

export default combineReducers({
  pokemon: PokemonReducer
});
