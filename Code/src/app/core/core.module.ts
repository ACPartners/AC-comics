import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelInterceptor } from './Interceptors/marvel-interceptor';
@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[MainHeaderComponent,BrowserModule,AppRoutingModule,FormsModule],
  providers:[{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: MarvelInterceptor, 
    multi: true 
} ],
})
export class CoreModule { }
