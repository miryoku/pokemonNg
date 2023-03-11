import { Component, OnInit } from '@angular/core';
import { ListPokemon } from 'src/app/core/model/listPokemon';
import { ListPokemonService } from 'src/app/core/services/list-pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{
  
  models!:ListPokemon
  isLoading: boolean = false;
  constructor (private listPokemonService:ListPokemonService,public router: Router,){}
  ngOnInit(): void {
    this.loadListPokemon();

  }


  private loadListPokemon() {
    this.isLoading=true;
    this.listPokemonService.getListPokemon().subscribe(
      data => {
       this.models=data;
       this.isLoading=false;
      }
    )
  }

  public listPokemonOffet(offset:string) {
    this.isLoading=true;
    this.listPokemonService.getListPokemonOffset(offset).subscribe(
      data => {
        this.models=data;
        this.isLoading=false;
      }
    )
  }

  public detailPokemon(id:string){
    this.router.navigateByUrl("/PokemonDetail/"+id)
  }
}
