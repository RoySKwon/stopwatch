import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Component, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  
  @Output() clickEvent = new EventEmitter<string>();

  constructor() {

  }
  
    executeButton(command){
  
      this.clickEvent.emit(command);
    }

  ngOnInit(): void {
  }

}
  