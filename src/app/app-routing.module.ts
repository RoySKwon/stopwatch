import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Routes add
import { AppComponent } from './app.component';


// const routes: Routes = [ //SoF
const routes = [
  {
    path: '',
    redirectTo: 'stopwatch',
    pathMatch: 'full'
    // pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [

  ],

  imports: [
    RouterModule.forRoot(routes), //Routes add
    // CommonModule,
  ],

  exports:[
    RouterModule,
  ],

})
export class AppRoutingModule { }
