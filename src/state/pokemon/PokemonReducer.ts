import {PokemonDispatchTypes, PokemonE, PokemonType} from "./PokemonActionTypes";

interface PokemonStateI {
  loading: boolean;
  pokemon?: PokemonType
}
const defaultState: PokemonStateI = {
  loading: false
};

export default (state: PokemonStateI = defaultState, action: PokemonDispatchTypes): PokemonStateI => {
  switch (action.type) {
    case PokemonE.fail:
      return { ...state, loading: false };
    case PokemonE.loading:
      return { ...state, loading: true };
    case PokemonE.success:
      return {
        loading: false,
        pokemon: action.payload
      };
    default:
      return state;
  }
}
