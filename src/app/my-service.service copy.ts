import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }
}
