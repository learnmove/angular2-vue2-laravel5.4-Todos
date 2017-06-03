import { any } from 'codelyzer/util/function';
import { Http,Headers ,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
@Injectable()
export class SignService {
 headers=new Headers({'Content-Type':'application/json'});

  constructor(private http:Http) { }
  postUser(data):Observable<any>{
  const body=JSON.stringify(data);
  return this.http.post("http://localhost/laravel/laraveltodo/todo/public/api/user/signup",body,{headers:this.headers})
  .map(
    (response:Response)=>
    {
      return response.json();
    }
    );
  }
  Login(data){
    const body=JSON.stringify(data);
    return this.http.post('http://localhost/laravel/laraveltodo/todo/public/api/user/signin',body,{headers:this.headers})
    .map((response:Response)=>{
      const token= response.json().token
    const base64Url=token.split('.')[1];
    const base64=base64Url.replace('-','+').replace('_','/');
    return {token:token,decoded:JSON.parse(window.atob(base64Url))};  //token裡頭還未解析
  })
    .do(
      (tokenData)=>{
      localStorage.setItem('token',tokenData.token);
    }
    )


  }
  getToken(){
    return localStorage.getItem('token');
  }
}
