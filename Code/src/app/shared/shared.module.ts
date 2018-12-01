import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ThumbnailToImageSrcPipe } from './pipes/thumbnail-to-image-src.pipe';
import { PagerComponent } from './pager/pager.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { PagerService } from './pager/pager.service';
import { ViewHostDirective } from './dynamic-component-creator/view-host.directive';
import { DynamicComponentService } from './dynamic-component-creator/dynamic-component.service';

@NgModule({
  declarations: [ThumbnailToImageSrcPipe,PagerComponent,FlipCardComponent, ViewHostDirective],
  imports: [
    CommonModule, 
  ],
  exports:[ThumbnailToImageSrcPipe,PagerComponent,FlipCardComponent,ViewHostDirective],
  providers:[PagerService,DynamicComponentService]
})
export class SharedModule { }
