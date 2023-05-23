import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  
  private apiUrl = 'http://localhost:8082/api/calculator';
  
  constructor( private http:HttpClient) { }
  expressionEvaluation(data: string) : any{
    console.log("hhh" + JSON.stringify(data))
      return this.http.post(this.apiUrl+'/evaluate',JSON.stringify(data));
  }
 
}
