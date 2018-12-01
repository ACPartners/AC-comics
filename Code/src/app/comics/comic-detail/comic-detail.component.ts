import { Component, OnInit, Input } from '@angular/core';
import { ComicHelper } from '../../../Helpers/comics';
import { Comic } from '../../../Helpers/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ac-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  @Input("comic")
  public comic:Comic;
  
  constructor(private router:ActivatedRoute,private service:ComicHelper) { }

  ngOnInit() {
    let id = this.router.snapshot.params["id"];
    this.comic = this.service.getComic(id%this.service.getComics().length)
  }

}
