import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './section/stopwatch/buttons/buttons.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // SectionComponent,
    // TimeDisplayComponent,
    // ButtonsComponent,
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    SectionModule,
    AppRoutingModule,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
