import { SignService } from '../sign.service';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private SignService:SignService) { }

  ngOnInit() {
  }
 onSignin(form:NgForm){
  this.SignService.Login(form)
  .subscribe((decodedToken)=>console.log(decodedToken));
 }
}
