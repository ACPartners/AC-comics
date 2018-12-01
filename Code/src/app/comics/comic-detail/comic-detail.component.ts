import { Component, OnInit,  Input } from '@angular/core';
import { ComicHelper } from '../../../Helpers/comics';
import { Comic } from '../../../Helpers/models';

@Component({
  selector: 'ac-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  @Input("comic")
  public comic:Comic;

  constructor() { }

  ngOnInit() {
  
  }

}
