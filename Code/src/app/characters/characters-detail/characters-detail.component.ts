import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Character } from '../models';
import { EventsListComponent } from '../../events/events-list/events-list.component';

@Component({
  selector: 'acp-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  
  public eventsListComponent:Type<any>;
  
  public character:Character;

  constructor(private route:ActivatedRoute,private characterService:CharactersService) {  }

  ngOnInit() { 
    this.route.params.subscribe(params=>this.loadCharacter(params["id"]));
    this.eventsListComponent = EventsListComponent;
  }

  private loadCharacter(id:number){
    this.characterService.getCharacter(id).subscribe(result=>{
      this.character = result;
     // this.loadComics();
      console.log("char loaded",this.character)
    })
  }
  private loadComics(){
    console.log("loading comics");
    // this.characterService.loadComics(+this.character.id).subscribe(result=>{console.log(result)});
  }

}
