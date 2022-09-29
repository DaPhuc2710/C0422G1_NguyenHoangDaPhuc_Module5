import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  contactForm=new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    isMarried:new FormControl(),
    country: new FormControl(),
  })
  countryList =[
    {id:1, name:"Vietnam"},
    {id:2, name:"USA"},
    {id:3, name:"Russia"},
    ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
