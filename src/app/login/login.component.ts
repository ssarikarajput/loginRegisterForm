import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { LoginRegisterService } from '../login-register.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
message = '';

  constructor(private service : LoginRegisterService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received!");
        this.router.navigate(['/home'])  //this method will navigate it to the home page...
      },
      error => {
        console.log("exception occured!");
        this.message = 'Bad Credentials, please provide valid email and password!';
      }
    )
  }

  gotoRegistration(){
    console.log("hey!");
    this.router.navigate(['/register'])
  }

}
