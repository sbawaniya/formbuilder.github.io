import { Type } from "@angular/core";

export class Control {
    constructor(public component: Type<any>, public componentName: string, public data: any){}
}

export interface Item {
    id: number;
    name: string;
    icon: string;
    value : Control;
}