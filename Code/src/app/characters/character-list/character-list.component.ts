import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../models'; 

@Component({
  selector: 'acp-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {


  @Input("items")
  public characters:Character[];

  @Output("onCharacterCardClick")
  public characterCardClick:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public trackByCharacter(index:number,item:Character):string{
    return item.id;
  }
  public onCardClick(id:number){
    console.log("id");
    this.characterCardClick.emit(id);
  }

}
