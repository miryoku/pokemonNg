import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './component/list-pokemon/list-pokemon.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path:'',component:ListPokemonComponent },
  {path:'PokemonDetail/:id',component:PokemonDetailComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
