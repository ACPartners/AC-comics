import { Component, OnInit } from '@angular/core';
import { Character } from '../../performance.data';
import { PerformanceDataService } from '../../performanceData.service';
import { List } from 'immutable';

@Component({
  selector: 'ac-character-cost-overview',
  templateUrl: './character-cost-overview.component.html',
  styleUrls: ['./character-cost-overview.component.scss']
})
export class CharacterCostOverviewComponent implements OnInit {

  constructor(private service:PerformanceDataService) { }
  heroList: List<Character>;
  villainList:List<Character>;


  ngOnInit() {
    this.heroList = List<Character>( this.service.getHeroes());
    this.villainList = List<Character>(this.service.getVillains()); 
  }
  public addItem(characters:List<Character>,label:string){
    return characters.unshift({name:label,damageModifier:36});
  }

  public addHero(){
   this.heroList =  this.addItem(this.heroList,"hello");
  }
}
