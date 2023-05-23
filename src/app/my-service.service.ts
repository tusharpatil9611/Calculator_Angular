import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorService } from './calculator.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private currentValue = new BehaviorSubject<string>('0');
  currentDisplayValue$S = this.currentValue.asObservable();
  

  
  private inputArray: { value: string, type: string }[] = [];
 
  constructor(private http: HttpClient,private calculatorService:CalculatorService) { }
  numClickHandler(num: string): void {
    let value = this.getValue();
    const newValue = value === '0' ? num.toString() : value + num;
    this.setValue(newValue);
  }
  

  funcClickHandler(func: string): void {
    //this.currentValue.next(func);
    if (func === 'AC') {
      this.setValue('0');
    } else if (func === 'DEL') {
      const value = this.getValue();
      const newValue = value.length === 1 ? '0' : value.slice(0, -1);
      //this.setValue(value.slice(0,-1));
      this.setValue(newValue);
    }
  }

  opClickHandler(op: string): void {
    if (op === '=') {
      this.calculator();
    } else {
      const value = this.getValue();
      const lastChar = value.slice(-1);
      let newValue=null;
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        // Replace the last operator with the new one
         newValue = value.slice(0, -1) + op;
        this.setValue(newValue);
      } else {
        // Append the operator to the current value
        newValue = value + op;
        this.setValue(newValue);
      }
    }
  }

  calculator():any{
      let value = this.getValue();
      const result = eval(value);
      this.setValue(result.toString());
  }

  getValue(): string {
    return this.currentValue.getValue();
  }

  setValue(value: string): void {
    this.currentValue.next(value);
  }
}
