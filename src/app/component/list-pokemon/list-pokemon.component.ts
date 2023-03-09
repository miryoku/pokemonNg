import { Component, OnInit } from '@angular/core';
import { ListPokemon } from 'src/app/core/model/listPokemon';
import { ListPokemonService } from 'src/app/core/services/list-pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{
  
  models!:ListPokemon
  nbPages!: number[]

  constructor (private listPokemonService:ListPokemonService,){}

  ngOnInit(): void {
    this.loadListPokemon();

  }


  private loadListPokemon() {
    this.listPokemonService.getListPokemon().subscribe(
      data => {
       this.models=data;
       this.nbPages=[];
       console.log(Array(Math.ceil(this.models.count/20)))
       //trouve comment le replir avec le bon index
      }
    )
  }

}
