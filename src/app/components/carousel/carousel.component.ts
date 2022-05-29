import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import swal from 'sweetalert';

import { OrderModel } from 'src/app/models/order.model';
import { incrementTotal } from './store/carousel.actions';
import { OrdersStore, OrderState } from './store/carousel.store';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() recipes: OrderModel[] = [];
  @Input() recipesVegan: OrderModel[] = [];
  selectedIndex = 0;
  selectedIndexVeg = 0;
  count: number;
  countVegan: number;
  countTotal$: Observable<number>;
  added: OrderModel[];

  constructor(
    private store: Store<{
      count: number;
    }>,
    private orderStore: OrdersStore
  ) {
    this.added = [];
    this.count = 0;
    this.countVegan = 0;
    this.countTotal$ = store.select('count');
  }

  ngOnInit(): void {
    this.recipes = this.recipes.filter((d) => d.vegan === false);
  }

  prev() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.recipes.length - 1;
    }
  }
  preVeg() {
    if (this.selectedIndexVeg > 0) {
      this.selectedIndexVeg--;
    } else {
      this.selectedIndexVeg = this.recipesVegan.length - 1;
    }
  }

  next() {
    if (this.selectedIndex < this.recipes.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
  }
  nextVeg() {
    if (this.selectedIndexVeg < this.recipesVegan.length - 1) {
      this.selectedIndexVeg++;
    } else {
      this.selectedIndexVeg = 0;
    }
  }

  addToOrder() {
    this.orderStore.state$.subscribe((res) => (this.count = res.countNotVeg));
    if (this.count < 2) {
      this.orderStore.countNotVeg();
      this.orderStore.addToOrder(this.recipes[this.selectedIndex]);
      this.orderStore.state$.subscribe((res) => (this.added = res.orders));
      this.store.dispatch(incrementTotal());
    } else if (this.added.length < 4) {
      swal({
        title: 'Incorrecto',
        text: 'Debes ingresar también 2 menús veganos',
        icon: 'warning',
        dangerMode: true,
      });
    } else {
      swal({
        title: 'Listo!',
        text: 'Su orden está completa, para agregar un plato elimine uno.',
        icon: 'success',
        dangerMode: false,
      });
    }
  }
  addToOrderVegan() {
    this.orderStore.state$.subscribe((res) => (this.countVegan = res.countVeg));
    if (this.countVegan < 2) {
      this.orderStore.countVeg();
      this.orderStore.addToOrder(this.recipesVegan[this.selectedIndexVeg]);
      this.orderStore.state$.subscribe((res) => (this.added = res.orders));
      this.store.dispatch(incrementTotal());
    } else if (this.added.length < 4) {
      swal({
        title: 'Incorrecto',
        text: 'Debes ingresar también 2 menús no veganos',
        icon: 'warning',
        dangerMode: true,
      });
    } else {
      swal({
        title: 'Listo!',
        text: 'Su orden está completa, para agregar un plato elimine uno.',
        icon: 'success',
        dangerMode: false,
      });
    }
  }
}
