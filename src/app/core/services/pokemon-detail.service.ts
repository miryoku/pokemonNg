import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../model/pokemonDetail';
@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  private readonly url:string='https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient,) { }

  public getPokemonDetail(id:string):Observable<PokemonDetail>{
    return this.httpClient.get<PokemonDetail>(this.url+id);
  }

}
