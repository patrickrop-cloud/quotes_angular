import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


   quotes: Quote[] = [
    new Quote('Watch finding nemo.', 'Quote has 0 votes', 'Patrick', 'P.K',  0, 0, new Date(2016,7,10)),
    new Quote('Go the Gym.', 'Quote has 0 votes', 'Peter', 'M.A',  0, 0, new Date(2020,1,12)),
    new Quote('Watch Angular tutorial.', 'Quote has 0 votes', 'Raymond', 'R.E.D',  0, 0, new Date(1900,7,12)),
    new Quote('Let the sleeping dog lie.', 'Quote has 0 votes', 'Jack.M', 'A.M',  0, 0, new Date(2009,7,12)),
    new Quote('Life is what  you make it.', 'Quote has 0 votes', 'Jane. Doe', 'J.P.',  0, 0, new Date(2012,7,12)),
    new Quote('Go for ride.', 'Quote has 0 votes', 'Kip. A', 'B.E',  0, 0, new Date(2019,7,12)),
    // new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    // new Quote(2, 'Buy Snacks', 'Cookies and Candy are awsome'),
    // new Quote(3, 'Go for a Ride', 'Take an evening ride through the park'),
    // new Quote(4, 'Get Dog Food', 'Buy Bosko some food'),
    // new Quote(5, 'Watch Angular Tutorial', 'Learn a new skill'),
    // new Quote(6, 'Go to the Gym', 'Do some weight lifting'),
  ];
  

  addNewQuote(quote){
    this.quotes.push(quote)
  }
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
