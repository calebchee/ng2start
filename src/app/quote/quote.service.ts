import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Quote } from './quote';
import { LoggerService } from '../services/logger.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuoteService {

  data: any;
  constructor(private loggerService: LoggerService, public http: Http) { }

  baseURL:string="http://localhost:5000/api/quote";

  /*public getQuotes(){
    
      this.loggerService.log('Getting Quote');
           
      this.http.request(this.baseURL)
        .subscribe((res: Response)=>{
          this.data = res.json;
      });      
      let quotes: Quote[];
      quotes=[      
                 {planid: 'ab001', price: 100.00, promoprice: 80.00, promodiscount: 20.00},
                 {planid: 'ab002', price: 200.00, promoprice: 180.00, promodiscount: 20.00},
                 {planid: 'ac003', price: 300.00, promoprice: 280.00, promodiscount: 20.00},
                 {planid: 'ad004', price: 400.00, promoprice: 380.00, promodiscount: 20.00},      
              
      ]

      return quotes;    
  }*/

  getQuotes() : Observable<Quote[]>{
    return this.http.get(this.baseURL)
      .map((response)=> <Quote[]>response.json())
      .catch(this.handleError)
  }

  getQuoteByID(id:String) : Observable<Quote[]>{
    return this.http.get(this.baseURL+'/'+id)
      .map(this.extractQuotes)
      .catch(this.handleError)
  }

  //The code could have written using the arrow syntax
  //.map((response)=> <Quote[]>response.json())
  private extractQuotes(res: Response){
    return <Quote[]>res.json();
  }

  private handleError(res:Response){
    this.loggerService.log(res);
    return Observable.throw(res.json().error || 'Server Error');
  }

}
