import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myService: MyServiceService) { }
  title = 'my-app';

  currentValue = '0';
  handleButtonClick(value: string) {
    this.currentValue =value;
  }
  
}
