import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";
import { Router } from "@angular/router";

@Component({
  selector: "list-pokemon",
  templateUrl: "app/pokemons/list-pokemon.html"
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}