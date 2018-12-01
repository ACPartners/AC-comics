import { Input } from "@angular/core";

export abstract class ListScreen<T>{
    @Input("items")
    public items:Array<T>
} 