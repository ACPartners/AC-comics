import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Comic } from '../../../Helpers/models'; 
import { ComicService } from '../comic.service';

@Component({
  selector: 'ac-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {
  @Input("comics")
  public comics:Comic[];
  @Output("onComicSelected")
  public onComicClickEvent:EventEmitter<Comic> = new EventEmitter();
  constructor( ) { }

  ngOnInit() {
   
  }
  public onComicClick(selected:Comic){
    this.onComicClickEvent.emit(selected);
  }
}
