export enum PokemonE {
  loading = 'POKEMON_LOADING',
  fail = 'POKEMON_FAIL',
  success = 'POKEMON_SUCCESS'
};

export type PokemonType = {
  abilities: PokemonAbility[]
  sprites: PokemonSprites
  stats: PokemonStat[]
}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokemonSprites = {
  front_default: string
}

export type PokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export interface PokemonLoading {
  type: PokemonE.loading
}

export interface PokemonFail {
  type: PokemonE.fail
}

export interface PokemonSuccess {
  type: PokemonE.success,
  payload: PokemonType
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;
