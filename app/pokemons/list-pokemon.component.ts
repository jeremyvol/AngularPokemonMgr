import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: 'app/pokemons/list-pokemon.html'
})
export class ListPokemonComponent implements OnInit {
    pokemons: Pokemon[] = null;

    constructor(
        private router: Router,
        private pokemonsService: PokemonsService
    ) {}

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokemons = this.pokemonsService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon): void {
        this.router.navigate(['/pokemon', pokemon.id]);
    }
}
