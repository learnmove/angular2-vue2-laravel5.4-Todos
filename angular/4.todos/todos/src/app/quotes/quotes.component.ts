import { Quote } from '../quote.interface';
import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import { QuoteService } from "app/app.quote.service";
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:Quote[];

  constructor(private quotesService:QuoteService) { }

  ngOnInit() {
  }
  onGetQuotes(){
  this.quotesService.getQuotes()
  .subscribe(
    (quotes:Quote[])=>{console.log(quotes);this.quotes=quotes;},
    (error:Response)=>console.log(error)
    );
  }
deleteQuote(quote){
  const position=this.quotes.findIndex(
    (quoteEl:Quote)=> {return quoteEl.id==quote.id}
    );
    this.quotes.splice(position,1);

}

}
