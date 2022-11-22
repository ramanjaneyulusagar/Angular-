import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { DragComponent } from './drag/drag.component';
import { EnvironmentComponent } from './environment/environment.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './recipe/header.component';

const routes: Routes = [
  { path: 'drag', component: DragComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'PageComponent', component: PageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'dialog', component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
