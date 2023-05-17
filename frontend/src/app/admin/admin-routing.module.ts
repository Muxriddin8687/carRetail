import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarComponent } from './pages/car/car.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'car', component: CarComponent },
      { path: 'car/:id', component: CarEditComponent },
      { path: 'contact', component: ContactComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
