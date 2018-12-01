import { Pipe, PipeTransform } from '@angular/core';
import { Thumbnail } from '../../../Helpers/models';

@Pipe({
  name: 'thumbnailToImageSrc'
})
export class ThumbnailToImageSrcPipe implements PipeTransform {

  transform(value: Thumbnail, args?: any): any {
    if(!value)
      return;

      return value.path + "." + value.extension;
    
  }

}
