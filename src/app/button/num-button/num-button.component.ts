import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-num-button',
  templateUrl: './num-button.component.html',
  styleUrls: ['./num-button.component.css']
})
export class NumButtonComponent implements OnInit {
 // @Output() buttonClick = new EventEmitter<string>();
  constructor(private myService: MyServiceService) { }

  number:any[]=['9','8','7','6','5','4','3','2','1']
  ngOnInit(): void {
  }
  onClick(value: string): void {
    this.myService.numClickHandler(value);
  }
}
