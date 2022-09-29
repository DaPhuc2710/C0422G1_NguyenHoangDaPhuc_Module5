import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login : FormGroup
  constructor() {
    this.login = new FormGroup({
      email : new FormControl("",[Validators.email,Validators.required]),
      password : new FormControl("",[this.validateCustomPassword,Validators.required])
    })
  }
  validateCustomPassword (password : AbstractControl) {
    let temp = password.value;
    if (temp.length < 6) {
      return {'invalidPassword': true}
    }
    return null;
  }

  ngOnInit() {
  }

  getLogin() {
    console.log(this.login)
  }

}
