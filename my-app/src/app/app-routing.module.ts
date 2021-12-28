import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GacuzziComponent } from './components/gacuzzi/gacuzzi.component';
import { GymComponent } from './components/gym/gym.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SounaComponent } from './components/souna/souna.component';
import { SpaComponent } from './components/spa/spa.component';
import { SportsGymComponent } from './components/sports-gym/sports-gym.component';


const routes: Routes = [

 {path : "header" , component:HeaderComponent},
 {path:"gym" , component:GymComponent},
 {path:"souna" , component:SounaComponent},
 {path:"spa" , component:SpaComponent},
 {path:"gacuzzi" , component:GacuzziComponent},
 {path:"aboutus" , component:AboutusComponent},
 {path:"sportsgym" , component:SportsGymComponent},
 {path:"register" , component:RegisterComponent},

 {path : "**" ,  component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
