import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"**",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
