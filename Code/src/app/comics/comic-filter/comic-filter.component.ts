import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-comic-filter',
  templateUrl: './comic-filter.component.html',
  styleUrls: ['./comic-filter.component.scss']
})
export class ComicFilterComponent implements OnInit {

  
  private _title : string;
  @Input("title")
  public get title() : string {
    return this._title;
  }
  public set title(v : string) {
    this._title = v; 
    this.titleChanged.emit(this.title);
  }
   
  @Output("title")
  public titleChanged = new EventEmitter<String>();
 
  constructor() { }

  ngOnInit() {
  }


}
