import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'about', component: AboutComponent },
    { path: 'car/add', component: AddCarComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
