import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[MainHeaderComponent,BrowserModule,AppRoutingModule,FormsModule]
})
export class CoreModule { }
