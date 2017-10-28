import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { ShadowCardDirective } from './shadow-card.directive';

@NgModule({
    imports: [CommonModule, FormsModule, PokemonRoutingModule],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        ShadowCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonsService]
})
export class PokemonsModule {}
