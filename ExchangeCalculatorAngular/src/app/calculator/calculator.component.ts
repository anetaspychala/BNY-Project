import { Component } from '@angular/core';
import {CurrencyClientService, RootObject} from "../services/currency-client.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  selectedMonth: any;
  userChoice: UserChoose = new UserChoose('', '', 0);
  exchangeResult: number = 0;
  rootObject: RootObject = {
    result: '',
    provider: '',
    documentation: '',
    terms_of_use: '',
    time_last_update_unix: 0,
    time_last_update_utc: '',
    time_next_update_unix: 0,
    time_next_update_utc: '',
    time_eol_unix: 0,
    base_code: '',
    rates: {
      EUR: 0,
      AED: 0,
      AFN: 0,
      ALL: 0,
      AMD: 0,
      ANG: 0,
      AOA: 0,
      ARS: 0,
      AUD: 0,
      AWG: 0,
      AZN: 0,
      BAM: 0,
      BBD: 0,
      BDT: 0,
      BGN: 0,
      BHD: 0,
      BIF: 0,
      BMD: 0,
      BND: 0,
      BOB: 0,
      BRL: 0,
      BSD: 0,
      BTN: 0,
      BWP: 0,
      BYN: 0,
      BZD: 0,
      CAD: 0,
      CDF: 0,
      CHF: 0,
      CLP: 0,
      CNY: 0,
      COP: 0,
      CRC: 0,
      CUP: 0,
      CVE: 0,
      CZK: 0,
      DJF: 0,
      DKK: 0,
      DOP: 0,
      DZD: 0,
      EGP: 0,
      ERN: 0,
      ETB: 0,
      FJD: 0,
      FKP: 0,
      FOK: 0,
      GBP: 0,
      GEL: 0,
      GGP: 0,
      GHS: 0,
      GIP: 0,
      GMD: 0,
      GNF: 0,
      GTQ: 0,
      GYD: 0,
      HKD: 0,
      HNL: 0,
      HRK: 0,
      HTG: 0,
      HUF: 0,
      IDR: 0,
      ILS: 0,
      IMP: 0,
      INR: 0,
      IQD: 0,
      IRR: 0,
      ISK: 0,
      JEP: 0,
      JMD: 0,
      JOD: 0,
      JPY: 0,
      KES: 0,
      KGS: 0,
      KHR: 0,
      KID: 0,
      KMF: 0,
      KRW: 0,
      KWD: 0,
      KYD: 0,
      KZT: 0,
      LAK: 0,
      LBP: 0,
      LKR: 0,
      LRD: 0,
      LSL: 0,
      LYD: 0,
      MAD: 0,
      MDL: 0,
      MGA: 0,
      MKD: 0,
      MMK: 0,
      MNT: 0,
      MOP: 0,
      MRU: 0,
      MUR: 0,
      MVR: 0,
      MWK: 0,
      MXN: 0,
      MYR: 0,
      MZN: 0,
      NAD: 0,
      NGN: 0,
      NIO: 0,
      NOK: 0,
      NPR: 0,
      NZD: 0,
      OMR: 0,
      PAB: 0,
      PEN: 0,
      PGK: 0,
      PHP: 0,
      PKR: 0,
      PLN: 0,
      PYG: 0,
      QAR: 0,
      RON: 0,
      RSD: 0,
      RUB: 0,
      RWF: 0,
      SAR: 0,
      SBD: 0,
      SCR: 0,
      SDG: 0,
      SEK: 0,
      SGD: 0,
      SHP: 0,
      SLE: 0,
      SLL: 0,
      SOS: 0,
      SRD: 0,
      SSP: 0,
      STN: 0,
      SYP: 0,
      SZL: 0,
      THB: 0,
      TJS: 0,
      TMT: 0,
      TND: 0,
      TOP: 0,
      TRY: 0,
      TTD: 0,
      TVD: 0,
      TWD: 0,
      TZS: 0,
      UAH: 0,
      UGX: 0,
      USD: 0,
      UYU: 0,
      UZS: 0,
      VES: 0,
      VND: 0,
      VUV: 0,
      WST: 0,
      XAF: 0,
      XCD: 0,
      XDR: 0,
      XOF: 0,
      XPF: 0,
      YER: 0,
      ZAR: 0,
      ZMW: 0,
      ZWL: 0,
    }
  };

  currencyOptions = [
    {value: 'PLN', label: 'Polish Zloty',},
    {value: 'USD', label: 'US Dollar'},
    {value: 'EUR', label: 'Euro'},
    {value: 'CAD', label: 'Canadian Dollar'},
    {value: 'CHF', label: 'Swiss Franc'},
    {value: 'GBP', label: 'Pound Sterling'},
    {value: 'CZK', label: 'Czech Koruna'},
    {value: 'NOK', label: 'Norwegian Krone'},
    {value: 'RUB', label: 'Russian Rubel'},
    {value: 'SEK', label: 'Swedish Krone'},
    {value: 'AED', label: 'ZEA Dirham'},
    {value: 'GEL', label: 'Georgian Lari'},
    {value: 'UAH', label: 'Ukrainian Hryvnia'}
  ];
  constructor(private CurrencyClientService: CurrencyClientService) {}

  ngOnInit() {
    this.implementsCurrency()
    this.currencyOptions.sort((a, b) => a.label.localeCompare(b.label));
   }
  implementsCurrency() {
    this.CurrencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;});
  }
  calculateExchange() {
    const amount = this.userChoice.amount;
    const currencyFrom = this.userChoice.currencyFrom;
    const currencyTo = this.userChoice.currencyTo;
    if (
        this.rootObject.rates[currencyFrom] &&
        this.rootObject.rates[currencyTo] &&
        !isNaN(amount)
    ) {
      const exchangeRateFrom = this.rootObject.rates[currencyFrom];
      const exchangeRateTo = this.rootObject.rates[currencyTo];
      const convertedAmount = (amount / exchangeRateFrom) * exchangeRateTo;
      this.exchangeResult = convertedAmount;
    }
  }
}

export class UserChoose {
  currencyFrom: string;
  currencyTo: string;
  amount: number;

  constructor(currencyFrom: string, currencyTo: string, amount: number) {
    this.currencyFrom = currencyFrom;
    this.currencyTo = currencyTo;
    this.amount = amount;
  }
}