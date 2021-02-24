import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = "Welcome";

  constructor() {

   }

   startTime($event){

    console.log("from buttons Component : ",$event);
     this.present = $event; // 자식에게 받아온 값으로 바꾼다

    }

  ngOnInit(): void {
    
    console.log("StopwatchComponent",this.present);
  }

}
