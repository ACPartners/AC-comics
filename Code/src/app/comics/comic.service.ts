import { Injectable } from '@angular/core'; 
import { Observable, throwError } from 'rxjs';
import { map,catchError, retry  } from 'rxjs/operators'; 
import { Comic } from '../../Helpers/models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http:HttpClient) { 
  }

   public getComics():Observable<Comic[]>{
     console.log("get comics");
     let params = new HttpParams();
     params = params.append("apikey",environment.marvelApi.apiKey);
     return this.http
                .get<any>(this.getUrl("comics"),{params:params})
                .pipe(map(response=>{ 
                  return response.data.results;
                }));
   }
   public getComicById(id:number):Observable<Comic>{
    console.log("get comic by id");
    let params = new HttpParams();
    params = params.append("apikey",environment.marvelApi.apiKey);
    params = params.append("id",id.toString());
    return this.http
               .get<any>(this.getUrl("comics"),{params:params})
               .pipe(map(response=>{ 
                 return response.data.results[0];
               }))
               .pipe(retry(2),catchError(this.logError ) );
   }

   private getUrl(suffix:string):string{
     if(suffix.startsWith("/"))
        suffix = suffix.substring(1);
    return  environment.marvelApi.baseUrl + suffix;
   }

   private logError(error: HttpErrorResponse) {
    console.error(error);
    return throwError( error.error.status);
    }
}
