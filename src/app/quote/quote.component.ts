import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: any;

  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  // quotes:Quote[] = [
  //   new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
  //   new Quote(2,'Buy Snacks','Cookies and Candy are awsome'),
  //   new Quote(3,'Go for a Ride','Take an evening ride through the park'),
  //   new Quote(4,'Get Dog Food','Buy Bosko some food'),
  //   new Quote(5,'Watch Angular Tutorial','Learn a new skill'),
  //   new Quote(6,'Go to the Gym','Do some weight lifting'),
    // {id:1, name:'Watch finding Nemo', description:'find an online version'},
    // {id:2,name:'Buy snacks', description:'cookies and candy are awsome'},
    // {id:3,name:'Go for a Ride', description:'Take an evening ride over the park'},
    // {id:4,name:'Get Dog Food', description:'Buy Bosko some food'},
    // {id:5,name:'Watch Angular tutorial', description:'learn a new skill'},
  constructor() { }

  ngOnInit(): void {
  }

}
