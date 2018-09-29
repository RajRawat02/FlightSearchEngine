import { Component } from '@angular/core';
import { FlightdetailService } from './flightdetail.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oneway: Boolean = true;
  return: Boolean = false;
  Price: Number;
  max = 10000;
  min = 0;
  // flightPrice = 0;
  constructor(private flightser: FlightdetailService, private router: Router) { }
  valuechange (event) {
    this.flightser.changeflightprice(event.value);
    // console.log(event.value);
  }
  Oneway() {
    this.oneway = true;
    this.return = false;
    this.router.navigate(['']);
  }
  Return() {
    this.oneway = false;
    this.return = true;
    this.router.navigate(['']);
  }
 }