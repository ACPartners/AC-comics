import { Injectable } from "@angular/core"; 
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http"; 
import { Observable } from "rxjs"; 
import { map } from "rxjs/operators"; 
import { PagedData, Paging } from "../models/marvel-response.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let baseUrl =environment.marvelApi.baseUrl;
        let url = req.url;
        //this should not be here, but it is to let everything work with the old or new way
        if(req.params.has("apikey"))
            return next.handle(req)

        if (!req.url.startsWith("/"))
            baseUrl += "/";
        if(!~url.indexOf("marvel.com"))
             url = baseUrl + req.url;
       
        req = req.clone({
            url: url,
            params: req.params.append("apikey",environment.marvelApi.apiKey) 
        }); 
        return next.handle(req)
            .pipe(map(event => {
                if (event instanceof HttpResponse) {
                    console.log(event);
                    let d: PagedData<any> = {
                    
                        results: event.body.data.results,
                        paging: new Paging(event.body.data.offset,event.body.data.limit,event.body.data.total,event.body.data.count)
                    }
                    event = event.clone(
                        {
                            body: d
                        }
                    )
                }
                return event;
            })); 
    } 
}