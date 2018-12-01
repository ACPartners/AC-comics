import { Component, OnInit } from '@angular/core';
import { ComicHelper } from '../../../Helpers/comics';
import { Comic } from '../../../Helpers/models';

@Component({
  selector: 'ac-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  public comic:Comic;
  constructor(private service:ComicHelper) { }

  ngOnInit() {
    console.log("getting comics");
    this.comic = this.service.getComic(0);
  }

}
