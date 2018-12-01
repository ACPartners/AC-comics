import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
@Pipe({
  name: 'fibo'
})
export class FiboPipe implements PipeTransform {

 
@memo()
  transform(value: any,title:string): number {
    console.log("calculating", title);
    return this.fibonacci(value)
  }

  private fibonacci (num: number): number  {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  };


}
