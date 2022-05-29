import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/models/order.model';

export interface OrderState {
  orders: OrderModel[];
  countNotVeg: number;
  countVeg: number;
}

@Injectable()
export class OrdersStore extends ComponentStore<OrderState> {
  constructor() {
    super({ orders: [], countNotVeg: 0, countVeg: 0 });
  }
  addToOrder = this.updater((state: OrderState, newFood: OrderModel) => ({
    ...state,
    orders: [newFood, ...state.orders],
  }));
  removeFromOrder = this.updater((state: OrderState, index: number) => {
    const ordersCopy = [...state.orders];
    ordersCopy.splice(index, 1);
    return {
      ...state,
      orders: ordersCopy,
    };
  });

  countNotVeg = this.updater((state: OrderState) => ({
    ...state,
    countNotVeg: state.countNotVeg + 1,
  }));
  countLessNotVeg = this.updater((state: OrderState) => ({
    ...state,
    countNotVeg: state.countNotVeg - 1,
  }));
  countVeg = this.updater((state: OrderState) => ({
    ...state,
    countVeg: state.countVeg + 1,
  }));
  countLessVeg = this.updater((state: OrderState) => ({
    ...state,
    countVeg: state.countVeg - 1,
  }));

  orders$: Observable<OrderModel[]> = this.select((state) => state.orders);
  countNotVeg$: Observable<number> = this.select((state) => state.countNotVeg);
  countVeg$: Observable<number> = this.select((state) => state.countVeg);
}
