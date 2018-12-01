import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent } from './comics/comic-detail/comic-detail.component';
import { ComicOverviewComponent } from './comics/comic-overview/comic-overview.component';
import { CharacterOverviewComponent } from './characters/character-overview/character-overview.component';

const routes: Routes = [
  {  path: "", redirectTo: "comics", pathMatch: "full"  },
  {  path: "characters", component:CharacterOverviewComponent  },
  {path: "comics",   children: [
    { path: "detail/:id", component: ComicDetailComponent },
    { path: "overview", component: ComicOverviewComponent },
    { path: "", component: ComicOverviewComponent },
  ],},
  { path: "**", redirectTo: "comics" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
