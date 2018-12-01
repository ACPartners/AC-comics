import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../../../characters/models';

@Component({
  selector: 'ac-character-list-display',
  templateUrl: './character-list-display.component.html', 
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CharacterListDisplayComponent implements OnInit {
  @Input()
  public characters: Character[] =[];
  @Input()
  public title: string;
  constructor() { }

  ngOnInit() {
  }
   
}
