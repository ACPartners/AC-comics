export interface MarvelResponse{
    code: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: Data;
    etag: string;
}
 
export interface Data {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: any[];
}

export interface PagedData<T> {
    paging:Paging;
    results: Array<T>;
}
export class Paging{
     
    constructor(public  offset: string,public limit: string,public total: string, public count: string) { 
        
    }
   
    
 
}