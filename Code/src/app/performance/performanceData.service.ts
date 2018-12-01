import { Injectable } from '@angular/core';  
import { Heroes, Villains,Character } from './performance.data';
 
@Injectable()
export class PerformanceDataService {

  public getHeroes(length:number=0):Character[]{
    return this.getCharacter(Heroes,length);
  }
  public getVillains(length:number=0):Character[]{
    return this.getCharacter(Villains,length);
  }
  private getCharacter(list:string[],length:number):Character[]{
 
    if(!length)
        length = list.length;
 
        let lst:Character[] = [];
        for (let index = 0; index < length; index++) {
                  lst.push({
                    name:list[index],
                    damageModifier:this.generateModifier()
                  })
        }
        return lst;
  } 

  public generateModifier():number{
    let min = 20;
    let max = 30;
    return  Math.floor(Math.random()*(max-min+1)+min);
  }
}
