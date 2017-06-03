import { QuoteService } from '../app.quote.service';
import { Quote } from '../quote.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote:Quote;
  @Output() DeleteQuote=new EventEmitter<any>();
  editValue:string;
  editing:boolean=false;
  constructor(private quoteService:QuoteService) { }

  ngOnInit() {
  }
  onEdit(){
this.editing=true;
this.editValue=this.quote.content;

  }
  onCancel()
{

this.editing=false;
  
}
onUpdate(){
this.editing=false;
this.quoteService.updateQuote(this.quote.id,this.editValue)
.subscribe((quote)=>this.quote=quote.quote)
}
onDelete(){
this.quoteService.deleteQuote(this.quote.id)
.subscribe(()=>this.DeleteQuote.emit(this.quote));

}



}
