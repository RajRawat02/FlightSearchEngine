import { IFlight } from './../flight';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlightdetailService } from '../flightdetail.service';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  flightdetail: IFlight[] = [];
  Isdata: Boolean = false;
  constructor(private router: Router, private flightser: FlightdetailService) { }

  ngOnInit() {
  }
searchfunc(ocity: string, dcity: string, ddate: Date, passenger: number) {
this.flightser.ocity = ocity;
this.flightser.dcity = dcity;
this.flightser.ddate = ddate;
// this.Isdata = true;
 this.router.navigate(['flightdetails']);
}
}
