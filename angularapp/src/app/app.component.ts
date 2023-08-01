import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1: string;
  opt2: string;
  amt: number;
  res: string;
  result: string;

  exchange(a: string, b: string, amt: number) {
    if (a != null && b != null) {
      this.result = (Number(b) / Number(a) * amt).toFixed(2);
    }
  }
}