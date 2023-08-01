import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angularapp';
  fromCurrency = 'USD';
  toCurrency = 'GBP';
  amount = 0;
  result = '';

  currencies = [
    { id: 'USD', value: 1.126735 },
    { id: 'GBP', value: 0.876893 },
    { id: 'INR', value: 79.677056 },
  ];

  convert() {
    const fromRate = this.currencies.find(
      (currency) => currency.id === this.fromCurrency
    )?.value;
    const toRate = this.currencies.find(
      (currency) => currency.id === this.toCurrency
    )?.value;
    if (fromRate && toRate) {
      this.result = `${this.amount} ${this.fromCurrency} = ${
        (this.amount * fromRate) / toRate
      } ${this.toCurrency}`;
    }
  }
}