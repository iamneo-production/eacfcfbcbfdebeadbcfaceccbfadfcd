import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1:number;
  opt2:number;
  amt:number;
  result:string;

  constructor() {
    this.opt1 = 0;
    this.opt2 = 0;
    this.amt = 0;
    this.result = '';
  }

  exchange(a:number,b:number,amt:number){
    if(a!=null && b!=null && amt!=null){
      this.result = (b/a*amt).toFixed(2);
    }
  }
}