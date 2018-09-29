import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FlightdetailService } from './../flightdetail.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // @Output() currentPrice = new EventEmitter();
  max = 10000;
  min = 0;
  flightPrice = 0;
  constructor(private flightser: FlightdetailService) { }

  ngOnInit() {
  }
  valuechange (event) {
    this.flightser.changeflightprice(event.value);
    // console.log(event.value);
  }

}
