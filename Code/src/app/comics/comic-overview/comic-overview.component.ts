import { Component, OnInit } from '@angular/core';
import { Comic } from '../../../Helpers/models';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-comic-overview',
  templateUrl: './comic-overview.component.html',
  styleUrls: ['./comic-overview.component.scss']
})
export class ComicOverviewComponent implements OnInit {
   

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public openComicDetail(comic:Comic){
    console.log("clicked");
    this.router.navigate(["comics/detail",comic.id])
  }
}
