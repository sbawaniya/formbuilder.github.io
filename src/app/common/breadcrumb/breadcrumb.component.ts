import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: Breadcrumb[];

  constructor() {
    this.breadcrumbs = [{label: 'Home', path: 'home'}, {label: 'label', path: 'label'}];
  }
}

export interface Breadcrumb {
  label: string;
  path: string;
}