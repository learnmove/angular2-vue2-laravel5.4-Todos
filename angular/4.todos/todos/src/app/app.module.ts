import { SignService } from './sign.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteService } from "app/app.quote.service";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NewQuoteComponent,
    QuotesComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuoteService,SignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
