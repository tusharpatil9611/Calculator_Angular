import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-fun-button',
  templateUrl: './fun-button.component.html',
  styleUrls: ['./fun-button.component.css']
})
export class FunButtonComponent implements OnInit {
  
  function:any[]=['AC','DEL'];
  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
  }
  funHandler(value: string): void {
    this.myService.funcClickHandler(value);
  }
  // onClick(val:any){
  //   this.myService.setValue(Number(val));
  //   console.log(val)
  // }
}
