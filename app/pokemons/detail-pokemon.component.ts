import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: 'app/pokemons/detail-pokemon.html'
})
export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonsService: PokemonsService
    ) {} // on injecte ce service pour pouvoir l'utiliser dans le composant.

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.pokemon = this.pokemonsService.getPokemon(id); // on utilise le service pour récupérer un pokémon en fonction de son identifiant.
        });
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }
}
