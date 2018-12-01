export interface Url {
    type: string;
    url: string;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Item {
    resourceURI: string;
    name: string;
}

export interface Comics {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item[];
}

export interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item2[];
}

export interface Item3 {
    resourceURI: string;
    name: string;
}

export interface Series {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item3[];
}

export interface Item4 {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Characters {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item4[];
}

export interface Item5 {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Creators {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item5[];
}

export interface Next {
    resourceURI: string;
    name: string;
}

export interface Previous {
    resourceURI: string;
    name: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    resourceURI: string;
    urls: Url[];
    modified: string;
    start: string;
    end: string;
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    series: Series;
    characters: Characters;
    creators: Creators;
    next: Next;
    previous: Previous;
} 