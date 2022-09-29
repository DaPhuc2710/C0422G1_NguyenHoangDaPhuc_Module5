import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "../country";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  countries: Country[] = [
    {id: 1, countryName: "Vietnam"},
    {id: 2, countryName: "Korea"},
    {id: 3, countryName: "China"},
    {id: 4, countryName: "Japan"},
    {id: 5, countryName: "Thailand"},
    {id: 6, countryName: "USA"},
    {id: 7, countryName: "England"},
  ];

  registerFormReactive = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pass: new FormGroup({
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("",[Validators.required])
    },[this.validateCustomerPass]),

    country: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required, Validators.minLength(2), Validators.min(19)]),
    sex: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern("/^\\+84\\d{9,10}$/")]),

  });
  validateCustomerPass (pass : AbstractControl) {
    let temp1 = pass.value.password;
    let temp2 = pass.value.confirmPassword
    if (temp1 === temp2) {
      return null;
    }
    return { "invalidPass" : true}
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  createRegisterWithReactive() {
    console.log(this.registerFormReactive.value)

  }
}
