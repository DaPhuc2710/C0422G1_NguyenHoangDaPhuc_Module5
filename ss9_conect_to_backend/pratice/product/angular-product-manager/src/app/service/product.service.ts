import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/products")
  }

  addProduct(product: Product) {
    return this.httpClient.post("http://localhost:3000/products", product)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete("http://localhost:3000/products/"+id)
  }
  findByIdProduct(id:number): Observable<any>{
    return this.httpClient.get("http://localhost:3000/products/"+id)

  }
  updateProduct(id:number, product: Product): Observable<any> {
    return this.httpClient.put('http://localhost:3000/products/' + id, product);
  }
}
