import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-op-button',
  templateUrl: './op-button.component.html',
  styleUrls: ['./op-button.component.css']
})
export class OpButtonComponent implements OnInit {
 // @Output() buttonClick = new EventEmitter<string>();
  constructor(private myService: MyServiceService) { }
  operation:any[]=['/','*','-','+','=']
  ngOnInit(): void {
  }
 
  opHandler(value: string): void {
    this.myService.opClickHandler(value);
  }
}
