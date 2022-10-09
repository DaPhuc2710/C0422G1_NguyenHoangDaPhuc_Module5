import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Thai} from "../model/thai";

@Injectable({
  providedIn: 'root'
})
export class TestTrangService {

  constructor(private httpClient:HttpClient) { }

  themMoi(thai:Thai){
    return this.httpClient.post("abcxyz",thai)
    console.log(thai)
  }

  listFile(thai:Thai){
    // @ts-ignore
    return this.httpClient.get("testList",thai)
  }
}
