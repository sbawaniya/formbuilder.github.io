import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from 'src/app/host.directive';
import { InputComponent } from 'src/app/input/input.component';
import { Item } from 'src/app/item.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  public items: Item[] = [
    { id: 1, name: 'Input', icon: 'icon', value: { component: InputComponent, componentName: 'InputComponent', data: { name: 'Input' } } }
  ];
  public dropItems: Item[] = [];


  public test$: Observable<string> = new Observable<string>;
  public test = '';
  @ViewChild(Host, { static: true }) adHost!: Host;

  constructor() { }

  ngOnInit(): void {
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
