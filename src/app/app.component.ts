import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map, Observable, switchMap } from 'rxjs';
import { Host } from './host.directive';
import { InputComponent } from './input/input.component';
import { Control, Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public items: Item[] = [
    { id: 1, name: 'Input', icon: 'icon', value: { component: InputComponent, componentName: 'InputComponent', data: { name: 'Input' } } }
  ];
  public dropItems: Item[] = [];


  public test$: Observable<string> = new Observable<string>;
  public test = '';
  @ViewChild(Host, { static: true }) adHost!: Host;

  @ViewChild('search') searchBox!: ElementRef;
  constructor(
    public renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      const keyup$ = fromEvent(this.searchBox.nativeElement, 'keyup');
      keyup$
        .pipe(
          map((i: any) => i.currentTarget.value),
          debounceTime(2000)
        )
        .subscribe((v) => {
          console.log(v);
        });
    }, 1000);
  }

  drop(event: any): void {
    console.log(1);

    const dragItemIndex = event.previousIndex;
    this.dropItems.push(this.items[dragItemIndex]);

    // setTimeout(() => {
    const adItem = this.items[dragItemIndex];
    const viewContainerRef = this.adHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<Component>(adItem.value.component);
    // }, 2000);
  }


}
