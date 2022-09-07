import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'password-validator', component: PasswordValidatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
