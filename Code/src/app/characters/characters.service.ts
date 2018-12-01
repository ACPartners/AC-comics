import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from './models';
import { Observable } from 'rxjs'; 
import { map,  } from 'rxjs/operators'; 
import { PagedData } from '../core/models/marvel-response.model';
 

@Injectable()
export class CharactersService {
  loadComics(id: number): any {
    let offset = 18;
    let p = new HttpParams();
    p = p
          //.append("offset",(pageNumber*offset).toString())
          .append("limit",offset.toString()); 
    return this.http.get<PagedData<Character>>("characters/"+ id +"/comics",{params:p})
                    .pipe(map(response=>{ 
                                          return response;
                                        }));
    
  }

 

  constructor(private http:HttpClient) { }

  public getCharacters(pageNumber:number):Observable<PagedData<Character>>{
    let limit = 18;
    if(pageNumber<1)
      pageNumber = 1;
    let offset = (pageNumber-1)*limit;
    let params = new HttpParams();
    
    params = params.append("offset",offset.toString());
    params = params.append("limit",limit.toString());
    return this.http.get<PagedData<Character>>("characters",{params:params})
                    .pipe(map(response=>{ 
                                          return response;
                                        }));
  }

  public getCharacter(id:number):Observable<Character>{
    return this.http.get<PagedData<Character>>("characters/"+id)
                    .pipe(map(response=>{ 
                                      if(response.results.length)
                                          return response.results[0];
                                        return null;
                                        }));
  }
}
