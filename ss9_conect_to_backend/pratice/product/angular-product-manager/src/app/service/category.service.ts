import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private  httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/categories")
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get("http://localhost:3000/categories/"+id)
  }
}
