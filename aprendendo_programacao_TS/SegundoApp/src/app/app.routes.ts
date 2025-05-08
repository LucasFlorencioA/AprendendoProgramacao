import { Routes } from '@angular/router';

export const routes: Routes  = [
    { path: 'home', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
   ]; ;
