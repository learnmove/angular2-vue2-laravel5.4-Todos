import { SignService } from './sign.service';
import { Http,Response ,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class QuoteService{
    constructor(private http:Http,private SignService:SignService){

    }
     token=this.SignService.getToken();
    tokenQuery="?token="+this.token;
    headers=new Headers({'Content-Type':'application/json'});
    
    getQuotes(){
        return this.http.get('http://localhost/laravel/laraveltodo/todo/public/api/quotes')
        .map(
            (response:Response)=>{
                return response.json().quotes;
            }
        );

        
    }
    updateQuote(id:Number,newContent:string){
        console.log(newContent);
        const body=JSON.stringify({content:newContent});
        return this.http.put(
        'http://localhost/laravel/laraveltodo/todo/public/api/quote/'+id+this.tokenQuery,
        body,
        {headers:this.headers}
        )
        .map(
            (response:Response)=>response.json()
        )
        ;

    }
    deleteQuote(id:Number){
        return this.http.delete('http://localhost/laravel/laraveltodo/todo/public/api/quote/'+id+this.tokenQuery)
        .map((response:Response)=>{response.json()}
            );
    }
    postQuote(content:string){
        console.log(content);
        const body=JSON.stringify({content:content})
        return this.http.post('http://localhost/laravel/laraveltodo/todo/public/api/quote'+this.tokenQuery,
        body,
        {headers:this.headers}
        )
        .map(
            (response:Response)=>response.json()
            );
    }
}