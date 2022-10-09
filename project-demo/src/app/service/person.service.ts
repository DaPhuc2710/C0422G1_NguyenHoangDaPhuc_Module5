import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  createPerson(person: Person) {
    return this.httpClient.post('create', person)
  }

  fileList(person: Person) {
    // @ts-ignore
    return this.httpClient.get('list', person)
  }
}
