import { Component, OnInit } from '@angular/core';
import { Character } from '../../performance.data';
import { PerformanceDataService } from '../../performanceData.service';

@Component({
  selector: 'ac-character-cost-overview',
  templateUrl: './character-cost-overview.component.html',
  styleUrls: ['./character-cost-overview.component.scss']
})
export class CharacterCostOverviewComponent implements OnInit {

  constructor(private service:PerformanceDataService) { }
  heroList: Character[];
  villainList:Character[];
  ngOnInit() {
    this.heroList = this.service.getHeroes();
    this.villainList = this.service.getVillains(); 
  }
  public addItem(characters:Character[],label:string){
    characters.unshift({name:label,damageModifier:36});
  }
}
