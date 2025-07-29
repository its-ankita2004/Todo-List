import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { ProtectedComponent } from './protected/protected';
import { Todos } from './MyComponents/todos/todos';
import { AuthGuard } from './auth-guard/auth-guard';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent },
  { path: 'todos', component: Todos , canActivate:[AuthGuard]},
  { path: '', redirectTo: 'register', pathMatch: 'full' },
];
