import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'Watch finding Nemo'},
    {id:2,name:'Buy snacks'},
    {id:3,name:'Go for a Ride'},
    {id:4,name:'Get Dog Food'},
    {id:5,name:'Watch Angular tutorial'},
  ];
}
