import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ThumbnailToImageSrcPipe } from './pipes/thumbnail-to-image-src.pipe';

@NgModule({
  declarations: [ThumbnailToImageSrcPipe],
  imports: [
    CommonModule, 
  ],
  exports:[ThumbnailToImageSrcPipe]
})
export class SharedModule { }
