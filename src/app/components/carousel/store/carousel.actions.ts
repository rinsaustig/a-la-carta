import { Action, createAction, props } from '@ngrx/store';
import { OrderModel } from 'src/app/models/order.model';

export const incrementTotal = createAction('[Carousel Component] Increment');
export const decrementTotal = createAction('[Carousel Component] Decrement');
export const incrementNotVeg = createAction('[Carousel Component] Increment');
export const decrementNotVeg = createAction('[Carousel Component] Decrement');
export const incrementVeg = createAction('[Carousel Component] Increment');
export const decrementVeg = createAction('[Carousel Component] Decrement');
