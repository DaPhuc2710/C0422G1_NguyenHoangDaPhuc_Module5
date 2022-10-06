import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarHome} from '../model/car-home';
import {StartDestinaion} from '../model/start-destinaion';
import {EndDestination} from '../model/end-destination';

@Injectable({
  providedIn: 'root'
})
export class CarHomeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    // return this.httpClient.get('http://localhost:3000/carHome');
    return this.httpClient.get('http://localhost:8080/goCarHomeList');
  }

  getAllStartDestination(): Observable<any> {
    // return this.httpClient.get('http://localhost:3000/startDestinations');
    return this.httpClient.get('http://localhost:8080/goStartDestination');
  }

  getStartDestinationById(id: number): Observable<StartDestinaion> {
    return this.httpClient.get<StartDestinaion>('http://localhost:3000/startDestinations/' + id);
  }

  getAllEndDestination(): Observable<any> {
    // return this.httpClient.get('http://localhost:3000/endDestinations');
    return this.httpClient.get('http://localhost:8080/goEndDestination');
  }

  getEndDestinationById(id: number): Observable<EndDestination> {
    return this.httpClient.get<EndDestination>('http://localhost:3000/endDestinations/' + id);
  }

  findById(id: number): Observable<CarHome> {
    return this.httpClient.get<CarHome>('http://localhost:8080/goFindById/' + id);
  }

  updateCar(id: number, carHome: CarHome) {
    return this.httpClient.put('http://localhost:3000/carHome/' + id, carHome);
  }

  deleteCarHome(id: number) {
    return this.httpClient.delete('http://localhost:8080/goDelete/' + id);
  }
}
