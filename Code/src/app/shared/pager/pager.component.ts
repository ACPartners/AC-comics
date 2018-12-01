import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerService } from './pager.service';
 

@Component({
  selector: 'acp-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
 
  @Input("total")
  public totalItems: number;
  @Input("currentPage")
  public userPage?:number;
  @Input("offset")
  public offset?:number;
  @Input("pageSize")
  public pageSize: number; 
  @Input("updateRoute")
  public updateRoute=true;

  public totalPages: number;
  public startPage: number;
  public endPage: number; 
  public pages: Array<any>;
  public currentPage:number;
 @Output("onPageChanged")
  public pageChangeEmmiter:EventEmitter<number> = new EventEmitter();
  
  constructor(private location:Location,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private pagerService:PagerService) { }

  ngOnInit() {
    console.log("init");
    this.pagerService.currentPage.subscribe(currentPage=>this.setCurrentPage(currentPage));
    this.buildPager();  
  }
 
  private buildPager() {
    this.totalPages = Math.floor(this.totalItems / this.pageSize);
  
    if (this.userPage != undefined){
      this.currentPage = this.userPage;
    }
   if (this.offset != undefined) {
      this.currentPage =Math.floor(this.offset/this.pageSize)+1;
    } 
    this.updatePage(this.currentPage);   
  }
  public setPage(pageNumer: number) { 
    if(this.currentPage!=pageNumer){
      this.updatePage(pageNumer);
      this.pagerService.setCurrentPage(this.currentPage);
      this.pageChangeEmmiter.emit(this.currentPage);  
    } 
  }

  public updatePage(pageNumer:number){
    this.setCurrentPage(pageNumer);
    this.updateUrl();
  }

  private updateUrl(){
    if(!this.updateRoute)
      return; 
      
    const url = this.router.createUrlTree([], {relativeTo: this.activatedRoute,queryParams:{"page":this.currentPage}}).toString(); 
    this.location.go(url);
  }

  public setCurrentPage(pageNumer: number) {
    if ( pageNumer < 1)
    this.currentPage = 1;
  else if ( pageNumer > this.totalPages)
    this.currentPage = this.totalPages;
  else
    this.currentPage =  pageNumer;  
  this.calculatePagesToView(); 
  this.pages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
  }
 
 
  private calculatePagesToView() { 
    if (this.totalPages <= 10) {
      // less than 10 total pages so show all
      this.startPage = 1;
      this.endPage = this.totalPages;
    }
    else {
      // more than 10 total pages so calculate start and end pages
  
      if (this.currentPage <= 6) {
        this.startPage = 1;
        this.endPage = 10;
      } else if (this.currentPage + 4 >= this.totalPages) {
        this.startPage = this.totalPages - 9;
        this.endPage = this.totalPages;
      } else {
        this.startPage = this.currentPage - 5;
        this.endPage = this.currentPage + 4;
      }
    }
  } 
}
