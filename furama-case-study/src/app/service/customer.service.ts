import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../conponent/model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/customers')
  }

  getAllTypeCustomer(): Observable<any> {
    return this.httpClient.get(' http://localhost:3000/customerTypes')
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customers', customer)
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete('http://localhost:3000/customers/' + id)
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get('http://localhost:3000/customers/' + id)

  }

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.patch('http://localhost:3000/customers/update/' + id, customer)
  }
  findInformation(name, typeId): Observable<any>{
    if (typeId==0){
      return this.httpClient.get<any>('http://localhost:3000/customers?name_like='+name)
    }
    return this.httpClient.get<any[]>('http://localhost:3000/customers?name_like='+name+'&customerType.id='+typeId)
  }
}
