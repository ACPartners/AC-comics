import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersOverviewComponent } from './characters-overview/characters-overview.component';
import { CharactersService } from './characters.service';
import { CharacterRoutingModule } from './character-routing.module';  
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharactersFilterComponent } from './characters-filter/characters-filter.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { ResourcesModule } from '../resources/resources.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule,
    CharacterRoutingModule,
    ResourcesModule
  ],
  declarations: [CharactersOverviewComponent, CharactersDetailComponent, CharactersFilterComponent, CharacterListComponent],
  exports:[],
  providers:[CharactersService]
})
export class CharactersModule { }
