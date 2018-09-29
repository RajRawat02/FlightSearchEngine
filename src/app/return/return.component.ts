import { Component, OnInit } from '@angular/core';
import { IFlight } from './../flight';
import { Router} from '@angular/router';
import { FlightdetailService } from '../flightdetail.service';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  flightdetail: IFlight[] = [];
  Isdata: Boolean = false;
  constructor(private router: Router, private flightser: FlightdetailService) { }

  ngOnInit() {
  }
searchfunc(ocity: string, dcity: string, ddate: Date, rdate: Date, passenger: number) {
this.flightser.ocity = ocity;
this.flightser.dcity = dcity;
this.flightser.ddate = ddate;
this.flightser.rdate = rdate;
// this.Isdata = true;
 this.router.navigate(['flightdetails']);
}
}
