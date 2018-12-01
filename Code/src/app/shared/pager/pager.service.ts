import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PagerService {

  private currentPageSource = new BehaviorSubject(1);
  public currentPage = this.currentPageSource.asObservable();

  constructor() {  
  }
 
  public setCurrentPage(page:number){
    if(page>0)
      this.currentPageSource.next(page);
  }

  public destroyPager(){
    this.currentPageSource.unsubscribe();
  } 
}
