import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnailToImageSrc'
})
export class ThumbnailToImageSrcPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // if(args)
    //   alert(args + world)

      if(value && value.path)
        return value.path + "." + value.extension
        
      return "";   
  }

}
