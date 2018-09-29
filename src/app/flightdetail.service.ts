import { IFlightdes } from './flightdes';
import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FlightdetailService {
private products: IFlightdes[] = [{
    'price': 1000,
    'arriveFlight': 'AI-201',
    'departFlight': 'AI-202',
    'destination': 'Pune',
    'Origin': 'Delhi',
    'arrDepartTime': '10:00 AM',
    'arrArriveTime': '12:00 AM',
    'deptDepartTime': '10:00 AM',
    'deptArriveTime': '12:00 AM',
    'deptdate': '2018-09-28',
    'retdate': '2018-09-30'
},
{
    'price': 3000,
    'arriveFlight': 'AI-203',
    'departFlight': 'AI-204',
    'destination': 'Pune',
    'Origin': 'Delhi',
    'arrDepartTime': '10:00 AM',
    'arrArriveTime': '12:00 AM',
    'deptDepartTime': '10:00 AM',
    'deptArriveTime': '12:00 AM',
    'deptdate': '2018-09-28',
    'retdate': '2018-09-30'
},
{
    'price': 2000,
    'arriveFlight': 'AI-205',
    'departFlight': 'AI-206',
    'destination': 'Delhi',
    'Origin': 'Pune',
    'arrDepartTime': '10:00 AM',
    'arrArriveTime': '12:00 AM',
    'deptDepartTime': '10:00 AM',
    'deptArriveTime': '12:00 AM',
    'deptdate': '2018-09-28',
    'retdate': '2018-09-30'
},
{
    'price': 4000,
    'arriveFlight': 'AI-207',
    'departFlight': 'AI-208',
    'destination': 'Delhi',
    'Origin': 'Pune',
    'arrDepartTime': '10:00 AM',
    'arrArriveTime': '12:00 AM',
    'deptDepartTime': '10:00 AM',
    'deptArriveTime': '12:00 AM',
    'deptdate': '2018-09-28',
    'retdate': '2018-09-30'
}
];
private subject = new Subject<number>();
ocity: string;
dcity: string;
price: number;
ddate: Date;
rdate: Date;
public getData(): Observable<IFlightdes[]> {
    return of(this.products);
  }

public getDatabyprice(price: number): Observable<IFlightdes[]> {
    return of(this.products.filter(p => p.price < price));
}
getPrice() {
    return this.subject.asObservable();
}
changeflightprice(price: number) {
 this.subject.next(price);
 // console.log(price);
}
}