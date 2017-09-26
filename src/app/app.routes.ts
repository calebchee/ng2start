import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { PlansComponent } from './plans/plans.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes =[
    { path: 'home', component: HomeComponent },    
    { path: 'quote', component: QuoteComponent },
    { path: 'plans', component: PlansComponent },    
    { path: 'details', component: DetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];


