import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  id: number;
  customerInfor: Customer;
  customerType: CustomerType[] = []
  p: number = 1;


  constructor(private customerService: CustomerService, private toast: Toast) {
    this.customerService.getAllTypeCustomer().subscribe(data => {
      this.customerType = data
    })
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(dataList => {
      this.customers = dataList;
    })
  }


  getInfor(c: Customer) {
    this.customerInfor = c;
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe(deleteCus => {
      this.ngOnInit();
    })
  }

  search(value: string, value2: string) {
    this.customerService.findInformation(value, value2).subscribe(data => {
      this.customers = data,
        this.p = 1;
    })
  }
}
