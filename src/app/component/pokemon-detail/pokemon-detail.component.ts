import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/core/model/pokemonDetail';
import { PokemonDetailService } from 'src/app/core/services/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {

  id: string = this.activeRoot.snapshot.params["id"]
  models!:PokemonDetail;
  isLoading:boolean=false;
  constructor(private activeRoot: ActivatedRoute,private detailPokemon:PokemonDetailService)
  {
  }

  ngOnInit(): void {
    this.Detail()
  }

  private Detail(){
    this.isLoading=true;
    this.detailPokemon.getPokemonDetail(this.id).subscribe(
      data => {
        this.models=data;
        this.isLoading=false;
      }
    )
  }
}
