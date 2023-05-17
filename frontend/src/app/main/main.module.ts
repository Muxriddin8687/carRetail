import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { SmallAboutUsComponent } from './components/small-about-us/small-about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { CotologComponent } from './components/cotolog/cotolog.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    MainBarComponent,
    SmallAboutUsComponent,
    HomeComponent,
    CarDetailsComponent,
    MessageModalComponent,
    CotologComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
