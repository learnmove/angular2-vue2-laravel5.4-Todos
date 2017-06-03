import { ModuleWithProviders } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule, Routes } from '@angular/router';
import { NewQuoteComponent } from "app/new-quote/new-quote.component";
import { SignupComponent } from "app/signup/signup.component";
import {SigninComponent} from "app/signin/signin.component";
const APP_ROUTES: Routes = [
    {path:'',component:QuotesComponent},
    {path:'new-quote',component:NewQuoteComponent},
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent}
    
    
];
export const routing:ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);