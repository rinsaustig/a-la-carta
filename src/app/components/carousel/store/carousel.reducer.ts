import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { OrderModel } from 'src/app/models/order.model';
import {
  incrementTotal,
  decrementTotal,
  decrementNotVeg,
  incrementNotVeg,
  incrementVeg,
  decrementVeg,
} from './carousel.actions';

export interface orderInterface {
  orders: OrderModel[];
}
export const initialOrder: orderInterface = { orders: [] };

export const initialState = 0;
export const initialNotVegState = 0;
export const initialVegState = 0;

export const counterTotalReducer = createReducer(
  initialState,
  on(incrementTotal, (state) => state + 1),
  on(decrementTotal, (state) => state - 1)
);
export const counterNotVegReducer = createReducer(
  initialNotVegState,
  on(incrementNotVeg, (state) => state + 1),
  on(decrementNotVeg, (state) => state - 1)
);
export const counterVegReducer = createReducer(
  initialVegState,
  on(incrementVeg, (state) => state + 1),
  on(decrementVeg, (state) => state - 1)
);
