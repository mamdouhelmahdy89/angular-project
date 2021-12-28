import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { GymComponent } from './components/gym/gym.component';
import { SounaComponent } from './components/souna/souna.component';
import { SpaComponent } from './components/spa/spa.component';
import { GacuzziComponent } from './components/gacuzzi/gacuzzi.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SportsGymComponent } from './components/sports-gym/sports-gym.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GymComponent,
    SounaComponent,
    SpaComponent,
    GacuzziComponent,
    AboutusComponent,
    SportsGymComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
