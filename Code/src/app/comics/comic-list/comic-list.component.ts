import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Comic } from '../../../Helpers/models';
import { ComicHelper } from '../../../Helpers/comics'; 

@Component({
  selector: 'ac-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  public comics:Comic[];
  @Output("onComicSelected")
  public onComicClickEvent:EventEmitter<Comic> = new EventEmitter();
  constructor(private helper:ComicHelper) { }

  ngOnInit() {
    this.comics = this.helper.getComics();
  }
  public onComicClick(selected:Comic){
    this.onComicClickEvent.emit(selected);
  }
}
