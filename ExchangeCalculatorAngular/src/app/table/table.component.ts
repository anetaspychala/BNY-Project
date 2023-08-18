import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class CurrencyTableComponent {
  CurrencyData = [
    { currency: 'Euro', code: 'EUR', averageRate: 1.2, flagSrc: './Pictures/EURO.png' },
    { currency: 'Dolar', code: 'USD', averageRate: 1.2, flagSrc: '/Pictures/usflag.png' },
    // Dodaj pozostałe dane walut
  ];
}

