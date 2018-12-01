import { Component, OnInit } from '@angular/core';
import { Character } from '../models';
import { CharactersService } from '../characters.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { Paging } from '../../core/models/marvel-response.model';


@Component({
  selector: 'acp-characters-overview',
  templateUrl: './characters-overview.component.html',
  styleUrls: ['./characters-overview.component.scss']
})
export class CharactersOverviewComponent implements OnInit {

  
  public characters:Character[];
  public paging:Paging; 
  public currentPage:number;
  constructor(private charactereService:CharactersService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() { 
    this.activatedRoute.queryParams.subscribe(params=> {
      if(params["page"])
       {
        this.currentPage = +params["page"];
        this.loadCharacters( this.currentPage );
       }
      else
        this.loadCharacters(0);
    }) 
  }
 
  public onCardClick(character:Character){
    console.log("navigate to character detail",character);
    
    this.router.navigate(["/characters/detail",character.id]) 
  }

  public changePage(pageNumber:number){ 
    this.loadCharacters(pageNumber);
  }

  private loadCharacters(pageNumber:number){
    this.characters = [];
    this.charactereService.getCharacters(pageNumber).subscribe(result=>{
      console.log(result);
      this.characters = result.results;
      this.paging = result.paging; 
     
   })
  }
 
}
