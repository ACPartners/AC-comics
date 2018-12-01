import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ac-character-cost-input',
  templateUrl: './character-cost-input.component.html',
  styleUrls: ['./character-cost-input.component.scss'],
  
})
export class CharacterCostInputComponent implements OnInit {
 
  public label: string;
  @Output()
  public add: EventEmitter<string> = new EventEmitter()

  public handleKey(event: any) {
    if (event.keyCode === 13  ) {
       this.add.emit(this.label);
       this.label = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
