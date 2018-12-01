import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicDetailComponent } from './comics/comic-detail/comic-detail.component';
import { ThumbnailToImageSrcPipe } from './shared/pipes/thumbnail-to-image-src.pipe';
import { ComicListComponent } from './comics/comic-list/comic-list.component'; 
import { ComicHelper } from '../Helpers/comics';
import { ComicOverviewComponent } from './comics/comic-overview/comic-overview.component';
import { CoreModule } from './core/core.module';
import { CharacterOverviewComponent } from './characters/character-overview/character-overview.component';
import { ComicsModule } from './comics/comics.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,      
    CharacterOverviewComponent, 
  ],
  imports: [
    CoreModule, 
    ComicsModule,
    SharedModule
  ],
  providers: [ComicHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
