import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  newCustomerUpdate: FormGroup;
  customer: Customer;
  id: number;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private  activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(newId => {
        this.newCustomerUpdate = new FormGroup({
          name: new FormControl(newId.name),
          dateOfBirth: new FormControl(newId.dateOfBirth),
          gender: new FormControl(newId.gender),
          idNumber: new FormControl(newId.idNumber),
          phone: new FormControl(newId.phone),
          email: new FormControl(newId.email),
          address: new FormControl(newId.address),
          customerType: new FormControl(newId.customerType.id),
        })
      });
    });

  }

  ngOnInit(): void {
    this.customerService.getAllTypeCustomer().subscribe(type=>{
      this.customerType=type
    })
  }

  update(id: any) {
    let customer: Customer = this.newCustomerUpdate.value;
    this.customerService.updateCustomer(id, customer).subscribe(newC => {
      this.router.navigateByUrl('/customer/list')
    })
  }

}
