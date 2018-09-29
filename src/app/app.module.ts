import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OnewayComponent } from './oneway/oneway.component';
import { ReturnComponent } from './return/return.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    OnewayComponent,
    ReturnComponent,
    FlightDetailComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path: 'OneWay' , component: OnewayComponent},
  {path: 'Return', component: ReturnComponent},
  {path: 'flightdetails', component: FlightDetailComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
