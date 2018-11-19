import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { ListStadiumsComponent } from './stadiums/list-stadiums/list-stadiums.component';
import { AddStadiumComponent } from './stadiums/add-stadium/add-stadium.component';

const routes: Routes = [
  {
    path: 'stadiums',
    component: ListStadiumsComponent,
    canActivate: [LoggedInGuard]
  },
  { path: 'stadiums2', component: ListStadiumsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
