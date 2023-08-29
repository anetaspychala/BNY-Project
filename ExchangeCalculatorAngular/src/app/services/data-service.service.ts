import { Injectable } from '@angular/core';
import {CalculatorComponent} from "../calculator/calculator.component";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  ratesData: any;
  constructor() {
  }
  setRatesData(data: any) {
    this.ratesData = data;
  }
}
