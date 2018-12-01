import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Comic } from '../../../Helpers/models';
import { ComicHelper } from '../../../Helpers/comics';

@Component({
  selector: 'ac-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  public comics:Array<Comic>;

  @Output("onComicSelected")
  public comicSelected:EventEmitter<Comic> = new EventEmitter();

  constructor(private service:ComicHelper) { }

  ngOnInit() {
    this.comics = this.service.getComics();
  }

  public onComicClick(comic:Comic){
    this.comicSelected.emit(comic);
  }

}
