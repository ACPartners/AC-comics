import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { EventsListComponent } from './events-list/events-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
 
  
@NgModule({
  imports: [
    CommonModule, 
    CoreModule,
    SharedModule
  ],
  declarations: [EventsListComponent],
  exports:[], 
  entryComponents:[EventsListComponent]
})
export class EventsModule { }
