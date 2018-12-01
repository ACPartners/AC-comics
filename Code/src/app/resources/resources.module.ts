import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ResourceListComponent } from './resource-list/resource-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,SharedModule
  ],
  declarations: [ResourceListComponent],
  exports:[ResourceListComponent]
})
export class ResourcesModule { }
