import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  serverUrl: string = "http://localhost:3000/"

  data = {
    drivers: [{
      id: 1,
      name: "Philip Luck",
      email: "p@g.com",
      phone: "443579938",
      city: "LA",
      address: "3. Sugar street 71."
    },{
      id: 2,
      name: "Jack Idol",
      email: "jack.idol@gmail.com",
      phone: "123543364",
      city: "LA",
      address: "7. Sugar street 333."
    },{
      id: 3,
      name: "Joe Firpo",
      email: "joe.firpo@gmail.com",
      phone: "887393572",
      city: "CA",
      address: "Stalin street 1."
    }],
    vehicles: [{
      id: 1,
      lp: "GOD-258",
      year : 2015,
      manufacturer: "VW",
      consumption : 7,
      engine : "diesel"
    }],
    fuelings: [{
      id: 1,
      vehicle: 1,
      driver : 1,
      amount : 40,
      date: "2019-04-02"
    }]
  };

  constructor(private http: HttpClient) {   }

  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    return this.http.get(url);
  }
}
