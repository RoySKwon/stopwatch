import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

// const routes: Routes = [ //SoF
const routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },

  {
    path: 'clock',
    component: ClockComponent
  },
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],

  exports: [
    SectionComponent,
    RouterModule // exports 잊지마
  ],

  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes) //파라미터 넣어준 값은 export 해줘야 한다.
  ]
})
export class SectionModule { }
