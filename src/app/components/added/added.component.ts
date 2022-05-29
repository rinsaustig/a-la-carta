import { Component, OnInit } from '@angular/core';
import { OrdersStore } from '../carousel/store/carousel.store';
import swal from 'sweetalert';

import { OrderModel } from 'src/app/models/order.model';
import { AddedService } from './added.service';
import { Store } from '@ngrx/store';
import { decrementTotal } from '../carousel/store/carousel.actions';
import { catchError, concatMap, tap } from 'rxjs';

@Component({
  selector: 'app-added',
  templateUrl: './added.component.html',
  styleUrls: ['./added.component.css'],
})
export class AddedComponent implements OnInit {
  added: OrderModel[];
  semiTotal: number;
  healthPoints: number;
  readyInMinutes: number;
  constructor(
    private addedService: AddedService,
    private ordersStore: OrdersStore,
    private store: Store<{ count: number }>
  ) {
    this.added = [];
    this.semiTotal = 0;
    this.healthPoints = 0;
    this.readyInMinutes = 0;
  }

  ngOnInit(): void {
    this.ordersStore.state$.subscribe((res) => {
      this.added = res.orders;
      this.semiTotal = this.addedService.semiTotal(this.added);
      this.healthPoints = this.addedService.heathPoints(this.added);
      this.readyInMinutes = this.addedService.readyInMins(this.added);
    });
  }

  openDetails(index: number) {
    swal({
      title: this.added[index].title,
      text:
        'Tiempo de cocción: ' +
        this.added[index].readyInMinutes +
        ' minutos.' +
        'Puntuación: ' +
        this.added[index].healthScore +
        ' puntos.',
      icon: 'success',
      dangerMode: false,
    });
  }

  removeFromOrder(index: number) {
    if (this.added[index].vegan) {
      this.ordersStore.countLessVeg();
    } else {
      this.ordersStore.countLessNotVeg();
    }
    this.store.dispatch(decrementTotal());
    this.ordersStore.removeFromOrder(index);
  }
}
