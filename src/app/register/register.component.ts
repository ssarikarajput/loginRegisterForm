import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { LoginRegisterService } from '../login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private service : LoginRegisterService, private router : Router){ }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received!");
        this.router.navigate(['/login'])
      },
      error => {
        console.log("exception occurred");
        this.msg = error.error;
        
      }
    )

  }

}
