import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
 
  constructor(private http:HttpClient) {  
  }

  public getByCollectionUri(collectionUri:string){
    return this.http.get(collectionUri);
  }
}
