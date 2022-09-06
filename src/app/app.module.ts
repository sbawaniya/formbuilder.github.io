import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { MatModule } from './common/mat.module';
import { TreeViewModule } from './common/tree-view/tree-view.module';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { AddEditComponent } from './common/add-edit/add-edit.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputComponent } from './input/input.component'
import { Host } from './host.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    AddEditComponent,
    SidenavComponent,
    InputComponent,
    Host
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatModule,
    TreeViewModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEditComponent]
})
export class AppModule { }
