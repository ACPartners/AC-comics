import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicDetailComponent } from './comics/comic-detail/comic-detail.component';
import { ThumbnailToImageSrcPipe } from './shared/pipes/thumbnail-to-image-src.pipe'; 
import { ComicHelper } from '../Helpers/comics';

@NgModule({
  declarations: [
    AppComponent,
    ComicDetailComponent,
    ThumbnailToImageSrcPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ComicHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
