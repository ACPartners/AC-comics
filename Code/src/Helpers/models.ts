export interface Comic {
    id: number;
    // digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description?: any; 
      format: string;
      pageCount: number; 
      thumbnail?: Thumbnail; 
}

export interface Url {
    type: string;
    url: string;
}

export interface Series {
    resourceURI: string;
    name: string;
}

export interface Date {
    type: string;
    date: any;
}

export interface Price {
    type: string;
    price: number;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Creators {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Characters {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Item {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}


