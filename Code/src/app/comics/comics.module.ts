import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicOverviewComponent } from './comic-overview/comic-overview.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ 
    ComicDetailComponent,
    ComicListComponent,
    ComicOverviewComponent],
  imports: [
    CommonModule,CoreModule,SharedModule
  ]
})
export class ComicsModule { }
