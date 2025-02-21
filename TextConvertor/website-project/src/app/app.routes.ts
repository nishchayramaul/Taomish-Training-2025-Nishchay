import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [
    {path:'submit' , component : HomeComponent},
    {path:'textconversion' , component : FeedbackComponent}
];
