import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsService {
    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number) {
        let pokemons = this.getPokemons();

        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    // types de pokémons possible
    getPokemonTypes(): Array<string> {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy'
        ];
    }
}
