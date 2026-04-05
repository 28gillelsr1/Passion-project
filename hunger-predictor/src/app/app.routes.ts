import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DataSourcesComponent } from './data-sources/data-sources.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'data-sources', component: DataSourcesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
