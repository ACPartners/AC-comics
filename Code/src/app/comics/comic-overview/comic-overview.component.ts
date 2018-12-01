import { Component, OnInit } from '@angular/core';
import { Comic } from '../../../Helpers/models';
import { Router } from '@angular/router';
import { ComicService } from '../comic.service';

@Component({
  selector: 'ac-comic-overview',
  templateUrl: './comic-overview.component.html',
  styleUrls: ['./comic-overview.component.scss']
})
export class ComicOverviewComponent implements OnInit {
   
  public selectedComic:Comic;
  public comics:Comic[];
  public comicsFiltered:Comic[];
  public title:string = "";
  
  constructor(private router:Router,private service:ComicService) { }

  ngOnInit() {
    this.service.getComics().subscribe(result=>{
      this.comics = result;
      this.comicsFiltered = this.comics;
    });
  }

  public openComicDetail(comic:Comic){
    console.log("clicked");
    this.router.navigate(["comics/detail",comic.id])
  }

  public onFilter(title:string):void{
    console.log(title)
    if(!this.comics)
      return;

      this.comicsFiltered = this.comics.filter(c=>{
        console.log(c.title);
         if(~c.title.toLowerCase().indexOf(title.toLowerCase()))
          return c;
      })
  }
}
