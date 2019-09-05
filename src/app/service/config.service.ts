import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    drivers: [
    {key: 'id', text : '#', type:"plain"},
    {key: 'name', text : 'Name', type:"text"},
    {key: 'email', text : 'Email', type:"email"},
    {key: 'phone', text : 'Phone', type:"text"},
    {key: 'city', text : 'City', type:"text", options: [{value: "LA", text: "Los Angeles"},{value: "NY", text: "New York"},{value: "CA", text: "Cali"}]},
    {key: 'address', text : 'Address'}
  ],
  vehicles: [
    {key: 'id', text : '1', type:"plain"},
    {key: 'lp', text : 'GOD-258', type:"text"},
    {key: 'year', text : '2015', type:"number"},
    {key: 'manufacturer', text : 'VW', type:"text"},
    {key: 'consumption', text : '7', type:"text"},
    {key: 'engine', text : 'diesel'}
  ],
  fuelings: [
    {key: 'id', text : '1', type:"plain"},
    {key: 'vehicle', text : '1', type:"text"},
    {key: 'driver', text : '1', type:"text"},
    {key: 'amount', text : '40', type:"text"},
    {key: 'date', text : '2019-04-02', type:"text"},
  ]};

  constructor() { }
}
