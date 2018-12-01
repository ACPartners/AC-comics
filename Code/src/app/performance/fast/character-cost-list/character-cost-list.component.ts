import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../../performance.data';
 

@Component({
  selector: 'ac-character-cost-list',
  templateUrl: './character-cost-list.component.html', 
  
})
export class CharacterCostListComponent implements OnInit {
  @Input()
  public characters: Character[] =[];
  @Input()
  public title: string;

  @Output()
  public add: EventEmitter<string> = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }
  
  public addCharacter(label:string):void{
    this.add.emit(label)
  }

}
