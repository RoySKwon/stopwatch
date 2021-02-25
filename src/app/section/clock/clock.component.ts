import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval } from 'rxjs';
import{count, map} from 'rxjs/operators';  //SoF



@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {


  timeString;
  routingCount;

  constructor(
    private router: Router
  ) {
    //testCode
    //메서드를 데이터바인딩 하면 파일내의 변화에 반응
 /* 
    setInterval( ()=>{

    }, 1000)
  */
    //RSjs
    //Functional Programming
    // interval(1000).pipe(map())
    interval(1000)
      .pipe(  map ( ()=>{
        return moment().format('YYYY-DD-MM HH:mm:ss')
    }))
      .subscribe(data => {
        this.timeString = data;
      })


   }
/* 
  getCurrentTime(){
    let result = moment().format('HH:mm:ss DD-MM-YYYY ');
    console.log(`HH:mm:ss DD-MM-YYYY ${result}`)
    return result;
  }
 */

  goStopwatch(){
    this.routingCount++;
    // localStorage.setItem();
    console.log("clock_routingCount: ",this.routingCount);
    this.router.navigateByUrl('/stopwatch');
  }
  ngOnInit(): void {
  }

}
