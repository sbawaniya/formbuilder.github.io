import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  searchText: string = '';

  constructor() { }

  ngOnInit() {
  }
}
