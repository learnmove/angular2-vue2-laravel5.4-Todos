import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { SignService } from "app/sign.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private SignService:SignService) { }

  ngOnInit() {
  }
 onSignup(form:NgForm){
   this.SignService.postUser(form)
   .subscribe((message)=>alert(message.message));
   
  }
   onSignin(form:NgForm){
   this.SignService.Login(form)
   .subscribe((message)=>alert(message.message));
   
  }
}
