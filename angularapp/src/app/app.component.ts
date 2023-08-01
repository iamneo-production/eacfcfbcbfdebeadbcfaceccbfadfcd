import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1: string = "1.126735";
  opt2: string = "1.126735";
  amt: number = 0;
  res: string = "";
  result: string = "";
  exchange(a: string, b: string, amt: number) {
    if (a != null && b != null) {
      this.result = (Number(b) / Number(a) * amt).toFixed(2);
    }
  }
}