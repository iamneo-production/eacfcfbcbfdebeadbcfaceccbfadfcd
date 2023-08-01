import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1:number = 0;
  opt2:number = 0;
  amt:number = 0;
  result:string = '';

  exchange(a:number,b:number,amt:number){
    if(a!=null && b!=null && amt!=null){
      this.result = (b/a*amt).toFixed(2);
    }
  }
}