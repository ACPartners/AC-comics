import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicOverviewComponent } from './comic-overview/comic-overview.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ComicService } from './comic.service';
import { HttpClientModule } from '@angular/common/http';
import { ComicFilterComponent } from './comic-filter/comic-filter.component';
@NgModule({
  declarations: [ ComicDetailComponent,
    ComicListComponent,
    ComicOverviewComponent,
    ComicFilterComponent],
  imports: [
    CommonModule,CoreModule,SharedModule,HttpClientModule
  ],
  providers:[ComicService]
})
export class ComicsModule { }
