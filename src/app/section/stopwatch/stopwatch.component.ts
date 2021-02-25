import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = "Welcome";
  routingCount;
  

  constructor(
    private router: Router
    ) {

   }

   goClock(){
    this.routingCount++;
    console.log("stopwatch_routingCount: ",this.routingCount);
     this.router.navigateByUrl('/clock');
   }

   startTime($event){

    console.log("from buttons Component : ",$event);
     this.present = $event; // 자식에게 받아온 값으로 바꾼다

    }

  ngOnInit(): void {
    
    console.log("StopwatchComponent",this.present);
  }

}
