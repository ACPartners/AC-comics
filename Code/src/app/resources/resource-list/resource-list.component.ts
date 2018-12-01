import { Component, OnInit, Input, Type, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ResourceContainer } from '../models/resource-item';
import { ResourceService } from '../resource.service';
import { ViewHostDirective } from '../../shared/dynamic-component-creator/view-host.directive';
import { DynamicComponentService } from '../../shared/dynamic-component-creator/dynamic-component.service';
import { ListScreen } from '../../shared/screens/list.screen';
 

@Component({
  selector: 'ac-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {

  @Input("resource")
  public resourceContainer:ResourceContainer;
  @Input("title")
  public title:string;
  @Input("listComponent")
  public listComponentType:Type<any>;

  public resources :any; 
  @ViewChild(ViewHostDirective)
  private viewHost:ViewHostDirective;

  constructor(private resourceService:ResourceService,  
              private dynamicComponentCreator:DynamicComponentService,private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {  
    this.resourceService.getByCollectionUri(this.resourceContainer.collectionURI)
                        .subscribe(r=>{
                          console.log("resoures " + this.title,r);
                          this.resources = r; 
                          if(this.listComponentType)
                          {
                            let componentRef = this.dynamicComponentCreator.createComponent(this.viewHost,this.listComponentType);
                           (<ListScreen<any>> componentRef.instance).items = this.resources.results;
                          }
                        });
  } 
}