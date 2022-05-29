import { Injectable } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class AddedService {
  constructor() {}

  semiTotal(added: Array<OrderModel>) {
    let total = 0;
    added.forEach((element) => {
      total += element.pricePerServing;
    });
    return Math.ceil(total);
  }

  heathPoints(added: Array<OrderModel>) {
    let total = 0;
    added.forEach((element) => {
      total += element.healthScore;
    });
    return Math.floor(total / added.length);
  }

  readyInMins(added: Array<OrderModel>) {
    let total = 0;
    added.forEach((element) => {
      total += element.readyInMinutes;
    });
    return total / added.length;
  }
}
