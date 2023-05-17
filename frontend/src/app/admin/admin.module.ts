import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarComponent } from './pages/car/car.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    CarComponent,
    CarEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
