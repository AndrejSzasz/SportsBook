import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { ListStadiumsComponent } from './stadiums/list-stadiums/list-stadiums.component';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: ListEventsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'stadiums',
    component: ListStadiumsComponent,
    canActivate: [LoggedInGuard]
  },
  { path: 'test', component: ListEventsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
