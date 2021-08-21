import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];


  constructor(){
    this.quotes = ['Watch finding nemo', 'Buy snacks', 'Go for a ride']
  }
  
}
