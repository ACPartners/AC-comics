import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[MainHeaderComponent]
})
export class CoreModule { }
