import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


   quotes: Quote[] = [
    new Quote('Live as if you were to die tomorrow. Learn as if you were to live forever', 'Quote has 0 votes', 'Mahatma Gandhi', 'M.G',  0, 0, new Date(2016,7,10)),
    new Quote('It is true hard work never killed anybody, but I figure, why take the chance?.', 'Quote has 0 votes', 'Ronald Reagan', 'R.R',  0, 0, new Date(1987,22,4)),
    new Quote('Two things are infinite: the universe and human stupidity; and I am not sure about the universe', 'Quote has 0 votes', 'Albert Einstein', 'A.E.',  0, 0, new Date(1960,5,11)),
    new Quote('There are no bad pictures; that is just how your face looks sometimes..', 'Quote has 0 votes', 'Abraham Lincoln', 'A.L',  0, 0, new Date(2009,7,12)),
    new Quote('Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.', 'Quote has 0 votes', 'Martin Luther', 'M.L',  0, 0, new Date(1906,6,10)),
    new Quote('Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.', 'Quote has 0 votes', 'Nelson Mandela', 'N.M',  0, 0, new Date(1920,7,12)),
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
