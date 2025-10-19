import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { Welcome } from './welcome/welcome';
import { ErrorComponent } from './error-component/error-component';
import { TodosListComponent } from './todos-list-component/todos-list-component';
import { LogoutComponent } from './logout-component/logout-component';
import { RouteGuard } from './service/route-guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuard] },
  { path: 'welcome/:name', component: Welcome, canActivate: [RouteGuard] },
  { path: 'todos', component: TodosListComponent, canActivate: [RouteGuard] },
  { path: '**', component: ErrorComponent },
];
