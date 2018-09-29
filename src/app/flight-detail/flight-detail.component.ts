import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FlightdetailService } from '../flightdetail.service';
import { IFlightdes } from './../flightdes';
import { Subscription } from 'rxjs';
import { SliderComponent } from './../slider/slider.component';
@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit, OnDestroy {
  flights: IFlightdes[];
  ocity: string;
  dcity: string;
  ddate: Date;
  rdate: Date;
  Price: Number = 0;
  subscription: Subscription;
  constructor(private flightser: FlightdetailService) {
    this.subscription = this.flightser.getPrice().subscribe(price => this.Price = price);
   }
  ngOnInit() {
     console.log("Oninit");
    this.subscription = this.flightser.getPrice().subscribe(price => {
      console.log(this.Price);
        this.Price = price;
        this.ocity = this.flightser.ocity;
        this.dcity = this.flightser.dcity;
        this.ddate = this.flightser.ddate;
        this.rdate = this.flightser.rdate;
      if (this.Price > 0) {
        this.flightser.getDatabyprice(+this.Price).subscribe(product => this.flights = product);
        this.flights = this.flights.filter(p => p.Origin === this.ocity && p.destination === this.dcity
           && p.deptdate === this.ddate.toString());
        // console.log(this.flights);
    // console.log()
      } else {
        this.flightser.getData().subscribe(product => this.flights = product);
        this.flights = this.flights.filter(p => p.Origin === this.ocity && p.destination === this.dcity
          && p.deptdate === this.ddate.toString());
        // console.log(this.flights);
      }
    });
    this.ocity = this.flightser.ocity;
    this.dcity = this.flightser.dcity;
    this.ddate = this.flightser.ddate;
    this.rdate = this.flightser.rdate;
    this.Price = this.flightser.price;
    this.flightser.getData().subscribe(product => this.flights = product);
    console.log(this.flights);
    if (this.rdate) {
    this.flights = this.flights.filter(p => p.Origin === this.ocity && p.destination === this.dcity
       && p.deptdate === this.ddate.toString() && p.retdate === this.rdate.toString());
    } else {
      this.flights = this.flights.filter(p => p.Origin === this.ocity && p.destination === this.dcity
        && p.deptdate === this.ddate.toString());
    }
     console.log(this.flights);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.Price = 0;
    this.flightser.price = 0;
  }
}
