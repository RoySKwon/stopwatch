import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present: string = "Welcome";

  constructor() {

   }

   startTime($event){

    console.log("from buttons Component : ",$event);
     this.present = $event; // 자식에게 받아온 값으로 바꾼다

    }

  ngOnInit(): void {
    
    // console.log("SectionOnInit",this.present);
  }

}
