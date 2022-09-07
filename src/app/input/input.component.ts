import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, timer } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() fontSize: number = 15;
  @ViewChild('search') searchBox!: ElementRef;
  public value = '';
  
  constructor() { }

  ngOnInit(): void {
    timer(1000).subscribe(() => {
      const keyup$ = fromEvent(this.searchBox.nativeElement, 'keyup');
      keyup$
        .pipe(
          map((i: any) => i.currentTarget.value),
          debounceTime(2000)
        )
        .subscribe((v) => {
          console.log(v);
        });
    });
    
  }

}
