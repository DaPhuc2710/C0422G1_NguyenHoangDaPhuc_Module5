import {Component, OnInit} from '@angular/core';
import {CarHomeService} from '../../service/car-home.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CarHome} from '../../model/car-home';
import {EndDestination} from '../../model/end-destination';
import {StartDestinaion} from '../../model/start-destinaion';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  carHomeUpdate: FormGroup;
  id: number;
  carHome: CarHome;
  endDestination: EndDestination;
  startDestination: StartDestinaion;


  constructor(private carHomeService: CarHomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((para: ParamMap) => {
      this.id = +para.get('id');
    });
    this.carHomeService.getAllStartDestination().subscribe(next => {
      this.startDestination = next;
    });
    this.carHomeService.getAllEndDestination().subscribe(next => {
      this.endDestination = next;
    });
    this.carHomeService.findById(this.id).subscribe(next => {
      this.carHome = next;
      this.carHomeUpdate = new FormGroup({
        id: new FormControl(this.carHome.id),
        plate: new FormControl(this.carHome.plate),
        carType: new FormControl(this.carHome.carType),
        name: new FormControl(this.carHome.name),
        startDestination: new FormControl(this.carHome.startDestination.id),
        endDestination: new FormControl(this.carHome.endDestination.id),
        phone: new FormControl(this.carHome.phone),
        email: new FormControl(this.carHome.email),
        timeGo: new FormControl(this.carHome.timeGo),
        timeEnd: new FormControl(this.carHome.timeEnd),
      });
    });
  }

  ngOnInit(): void {

  }

  update(id: number) {
    let car = this.carHomeUpdate.value;
    this.carHomeService.getStartDestinationById(id).subscribe(next => {
      car.startDestination = next;
      this.carHomeService.getEndDestinationById(id).subscribe(next => {
        car.endDestination = next;
        this.carHomeService.updateCar(id, car).subscribe(next=>{
          this.router.navigateByUrl('')
          console.log(car);
        });
      });
    });


  }
}
