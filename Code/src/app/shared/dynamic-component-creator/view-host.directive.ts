import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[acViewHost]'
})
export class ViewHostDirective {

  constructor( public viewContainerRef:ViewContainerRef) { }

}
