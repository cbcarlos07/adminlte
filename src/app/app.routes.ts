import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {LoginComponent} from './login/login.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' }
    ]
  }
];
