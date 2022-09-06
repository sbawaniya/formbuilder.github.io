import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[host]',
})
export class Host {
  constructor(public viewContainerRef: ViewContainerRef) { }
}