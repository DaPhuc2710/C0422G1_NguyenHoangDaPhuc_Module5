import {Component, OnInit} from '@angular/core';
import {CarHomeService} from '../../service/car-home.service';
import {CarHome} from '../../model/car-home';
import {StartDestinaion} from '../../model/start-destinaion';
import {EndDestination} from '../../model/end-destination';


@Component({
  selector: 'app-car-home-list',
  templateUrl: './car-home-list.component.html',
  styleUrls: ['./car-home-list.component.css']
})
export class CarHomeListComponent implements OnInit {
  carHomes: CarHome[] = [];
  id: number;
  carHomeInfor: CarHome;
  startDestination: StartDestinaion[]=[];
  endDestination: EndDestination[]=[];
  p: number = 1;

  constructor(private  carHomeService: CarHomeService) {
    this.carHomeService.getAllStartDestination().subscribe(next => {
      this.startDestination = next;
    });
    this.carHomeService.getAllEndDestination().subscribe(next => {
      this.endDestination = next;
    });
  }

  ngOnInit(): void {
    this.carHomeService.getAll().subscribe(next => {
      this.carHomes = next.content;
    });
  }

  getInfor(home: CarHome) {
    this.carHomeInfor = home;
  }

  delete(id: number) {
    this.carHomeService.deleteCarHome(id).subscribe(next => {
      this.ngOnInit();
    });

  }


  search(name: string) {
    
  }
}
