import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,  } from '@angular/common/http';
import { ListPokemonComponent } from './component/list-pokemon/list-pokemon.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
