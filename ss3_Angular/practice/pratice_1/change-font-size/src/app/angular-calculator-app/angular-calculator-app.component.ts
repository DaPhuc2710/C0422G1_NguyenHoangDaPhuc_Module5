import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-calculator-app',
  templateUrl: './angular-calculator-app.component.html',
  styleUrls: ['./angular-calculator-app.component.css']
})
export class AngularCalculatorAppComponent implements OnInit {
  number1: number;
  number2: number;
  operators: string;
  Calculator(number1: number, number2: number, operators: string) : string {
    switch (operators) {
      case "+":
        return number1 + number2 + "";
        break;
      case "-":
        return number1 - number2 + "";
        break;
      case "*":
        return number1 * number2 + "";
      case "/":
        if (number2 == 0) {
          return "Số thứ 2 không được là số 0"
        } else {
          return number1 / number2 + "";
        }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
