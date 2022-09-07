import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { MatModule } from './common/mat.module';
import { TreeViewModule } from './common/tree-view/tree-view.module';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './common/add-edit/add-edit.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputComponent } from './input/input.component'
import { Host } from './host.directive';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    AddEditComponent,
    SidenavComponent,
    InputComponent,
    Host,
    DashboardComponent,
    PasswordValidatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatModule,
    TreeViewModule,
    DragDropModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEditComponent]
})
export class AppModule { }
