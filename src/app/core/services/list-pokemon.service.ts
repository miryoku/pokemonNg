import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPokemon } from '../model/listPokemon';

@Injectable({
  providedIn: 'root'
})
export class ListPokemonService {

  private readonly url:string='https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient,) { }

  public getListPokemon():Observable<ListPokemon>{
    return this.httpClient.get<ListPokemon>(this.url+"?limit=20&offset=0")
  }

  public getListPokemonOffset(offset:number):Observable<ListPokemon>{
    return this.httpClient.get<ListPokemon>(this.url+"?limit=20&offset="+offset)
  }
}
