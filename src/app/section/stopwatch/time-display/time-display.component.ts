// import { Component, Input, OnInit } from '@angular/core';
// import { SimpleChanges } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: string;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval;

  constructor() {}

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
      
      if(this.ms > 100){
        this.ms = 0;
        this.sec ++;
      } else if(this.sec > 60) {
        this.sec = 0;
        this.min ++;
      }
    }, 10);
  }

  timeStop() {
    console.log('TIME :', this.min,":",this.sec,":", this.ms);
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log(changes);

    for (let proName in changes) {
      if (proName == 'inputData') {
        switch (changes[proName].currentValue) {
          case 'start':
            this.timeStart();
            break;

          case 'stop':
            this.timeStop();
            break;

          case 'reset':
            this.timeReset();
            break;

          default:
            console.log('Error : ', changes[proName].currentValue);
            break;
        }

        console.log('timeStart Call');
      } else {
        console.log(
          'timeStart Not Call',
          proName,
          changes[proName].currentValue
        );
      }
    }
  }

  ngOnInit(): void {}
}

