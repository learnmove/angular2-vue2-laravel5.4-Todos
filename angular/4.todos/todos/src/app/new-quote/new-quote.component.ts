import { QuoteService } from '../app.quote.service';
import { Quote } from '../quote.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
quoteValue:string;
  constructor(private quoteService:QuoteService) { }

  ngOnInit() {
  }
onPost(){
  this.quoteService.postQuote(this.quoteValue)
  .subscribe((quote)=>{console.log(quote)});
}
}
