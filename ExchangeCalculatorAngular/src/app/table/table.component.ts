import { Component } from '@angular/core';
import {CalculatorComponent} from "../calculator/calculator.component";
import {CurrencyClientService, RootObject, Rates} from "../services/currency-client.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class CurrencyTableComponent {
  CurrencyData = [
    { currency: 'Euro', code: 'EUR', averageRate:1.0, flagSrc:"../assets/EURO.png" },
    { currency: 'US Dollar', code: 'USD', averageRate: 1.0, flagSrc:"../assets/usflag.png" },
    { currency: 'Polish Zloty', code: 'PLN', averageRate: 2.2, flagSrc:"../assets/plflag.png" },
    { currency: 'Canadian Dollar', code: 'CAD', averageRate: 3.2, flagSrc:"../assets/CADFlag.jpg" },
    { currency: 'Swiss Franc', code: 'CHF', averageRate: 3.2, flagSrc:"../assets/sflag.png" },
    { currency: 'Pound Sterling', code: 'GBP', averageRate: 3.2, flagSrc:"../assets/gbflag.jpg" },
    { currency: 'Czech Koruna', code: 'CZK', averageRate: 3.2, flagSrc:"../assets/CZKFlag.jpg" },
    { currency: 'Norwegian Krone', code: 'NOK', averageRate: 3.2, flagSrc:"../assets/norflag.png" }
  ];
}
