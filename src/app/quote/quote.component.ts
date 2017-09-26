import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  providers: [QuoteService]
})
export class QuoteComponent  {

  promo: boolean = true;
  toDate: Date = new Date();
  @Input() count:number;

  quotes:Quote[];
  loading: boolean=false;
  errorMessage;

  constructor(private quoteService:QuoteService, private fb: FormBuilder, private router: Router){
  }

  getQuotes(){

    this.loading=true;
    this.errorMessage="";

    this.quoteService.getQuotes()
      .subscribe(
        (response) => {
          this.quotes=response;
          console.log(this.quotes);
          localStorage.setItem('quotes', JSON.stringify(this.quotes));
          //this.router.navigate(['/plans']);
        },
        (error)=>{this.errorMessage=error;this.loading=false;},
        ()=>{this.loading=false;}
      )   
  } 

  public getSingleQuote() {
    this.loading=true;
    this.errorMessage="";

    this.quoteService.getQuoteByID(this.count.toString())
        .subscribe((response) => {this.quotes=response;},
        (error) => {this.errorMessage=error; this.loading=false; },
        () => {this.loading=false;})
    }
  
}
