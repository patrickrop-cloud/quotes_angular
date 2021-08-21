import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Watch finding Nemo', description:'find an online version'},
    {id:2,name:'Buy snacks', description:'cookies and candy are awsome'},
    {id:3,name:'Go for a Ride', description:'Take an evening ride over the park'},
    {id:4,name:'Get Dog Food', description:'Buy Bosko some food'},
    {id:5,name:'Watch Angular tutorial', description:'learn a new skill'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
