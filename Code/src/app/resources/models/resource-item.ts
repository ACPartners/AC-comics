import { Creators, Characters, Stories } from "../../events/models/events.models";
import { Events, Comics } from "../../characters/models";

export interface IResources{
    creators?: Creators;
    characters?: Characters;
    stories?: Stories;
    events?: Events;
    comics?:Comics;
}

export interface IResourceItem {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}
export interface ResourceContainer {
    available: string;
    returned: string;
    collectionURI: string;
    items: ResourceItem[];
}

export interface ResourceItem {
    resourceURI: string;
    name: string;
    type: string;
}