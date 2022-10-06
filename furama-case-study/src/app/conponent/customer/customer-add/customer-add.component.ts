import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../../service/customer.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required,Validators.pattern("^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\\s{1}([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$")]),
    dateOfBirth: new FormControl(),
    gender: new FormControl('',[Validators.required]),
    idNumber: new FormControl('',[Validators.required,Validators.pattern('^(0|84)(90|91)$')]),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl(),
  })
  customerTypes: CustomerType[];


  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerService.getAllTypeCustomer().subscribe(typeData => {
      this.customerTypes = typeData;
    })
  }

  ngOnInit(): void {
  }

  create() {
    this.customerService.createCustomer(this.customerForm.value).subscribe(newCustomer => {
      this.router.navigateByUrl('/customer/list')
      console.log(this.customerForm.value)
    })
  }
}
