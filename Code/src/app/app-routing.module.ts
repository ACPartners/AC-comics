import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent } from './comics/comic-detail/comic-detail.component';
import { ComicOverviewComponent } from './comics/comic-overview/comic-overview.component'; 
import { CharactersOverviewComponent } from './characters/characters-overview/characters-overview.component';
import { CharactersDetailComponent } from './characters/characters-detail/characters-detail.component';
import * as slow  from './performance/slow/character-cost-overview/character-cost-overview.component';
import * as fast from './performance/fast/character-cost-overview/character-cost-overview.component';

const routes: Routes = [
  {  path: "", redirectTo: "comics", pathMatch: "full"  },
  {  path: "characters",   children: [
    { path: "detail/:id", component: CharactersDetailComponent },
    { path: "", component: CharactersOverviewComponent } 
    ]  },
  {path: "comics",   children: [
    { path: "detail/:id", component: ComicDetailComponent },
    { path: "overview", component: ComicOverviewComponent },
    { path: "", component: ComicOverviewComponent },
  ]},
  {path: "slow",  component:slow.CharacterCostOverviewComponent},
  {path: "fast",  component:fast.CharacterCostOverviewComponent},
  { path: "**", redirectTo: "comics" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
