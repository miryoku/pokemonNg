import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/core/model/pokemonDetail';
import { PokemonDetailService } from 'src/app/core/services/pokemon-detail.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {

  id: string = this.activeRoot.snapshot.params["id"]
  models!:PokemonDetail;
  isLoading:boolean=false;

  radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  radarChartLabels!: string[]
  radarChartStat !: number[]
  radarChartType: ChartType = 'radar';
  radarChartData!: ChartData<'radar'> ;



  constructor(private activeRoot: ActivatedRoute,private detailPokemon:PokemonDetailService,private location: Location)
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



        //----- chart

        this.radarChartStat=new Array();
        this.radarChartLabels=new Array();
        this.models.stats.forEach(element => {
          this.radarChartStat.push(element.base_stat);
          this.radarChartLabels.push(element.stat.name);
        });
        this.radarChartData= {
          labels: this.radarChartLabels,
          datasets: [
            { data: this.radarChartStat, label: 'statistics' },
          ]
        };
      }
    )
  }


  public retour():void{
    this.location.back();
    
  }
}
