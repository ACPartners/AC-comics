import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../performance.data';
 

@Component({
  selector: 'ac-character-cost-list',
  templateUrl: './character-cost-list.component.html',
  styleUrls: ['./character-cost-list.component.scss']
})
export class CharacterCostListComponent implements OnInit {
  @Input()
  public characters: Character[] =[];
  @Input()
  public title: string;

  @Output()
  public add: EventEmitter<string> = new EventEmitter()
  public label: string;
  constructor() { }

  ngOnInit() {
  }
  public handleKey(event: any) {
    if (event.keyCode === 13) {
       this.add.emit(this.label);
       this.label = '';
    }
  }
public calculate(damageModifier:number):number{
  console.log("calculating",this.title);
  return this.fibonacci(damageModifier);
}
  private fibonacci (num: number): number  {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  };

}
