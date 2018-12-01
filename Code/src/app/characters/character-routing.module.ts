import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CharactersOverviewComponent } from './characters-overview/characters-overview.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';

const routes: Routes = [
  {path:"characters",children:[
    {path:"overview",component:CharactersOverviewComponent},
    {path:"details/:id",component:CharactersDetailComponent},
    {path:"",component:CharactersOverviewComponent}]}
  

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
