import { Injectable, ComponentFactoryResolver,   ComponentRef, ViewContainerRef } from '@angular/core';
import { ViewHostDirective } from './view-host.directive';
import { Type } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { 

  }

  public createComponent(host:ViewHostDirective,componentType:Type):ComponentRef<any>{
    let viewContainerRef = host.viewContainerRef;
    return this.createComponentByContainerReference(viewContainerRef,componentType)
  }
  public createComponentByContainerReference(viewContainerRef:ViewContainerRef,componentType:Type):ComponentRef<any>{
    viewContainerRef.clear(); 
    let resourceComponent = this.componentFactoryResolver.resolveComponentFactory(componentType);
    return viewContainerRef.createComponent(resourceComponent);
  }
}
