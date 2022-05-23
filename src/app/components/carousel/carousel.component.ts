import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import swal from 'sweetalert';

import { OrderModel } from 'src/app/models/order.model';
import { increment } from './store/carousel.actions';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() recipes: OrderModel[] = [];
  @Input() recipesVegan: OrderModel[] = [];
  @Input() indicators = true;
  @Output() order: OrderModel[] = [];
  selectedIndex = 0;
  selectedIndexVeg = 0;
  fullRecipes = true;
  count = 0;
  countTotal$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.countTotal$ = store.select('count');
  }

  ngOnInit(): void {}

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
    this.count++;
    this.store.dispatch(increment());
    console.log(
      'obser',
      this.countTotal$.subscribe((res) => res < 5)
    );
    if (this.count < 3) {
      this.order.push(this.recipes[this.selectedIndex]);
    } else if (this.countTotal$.subscribe((res) => res < 5)) {
      swal({
        title: 'Incorrecto',
        text: 'Debes ingresar también 2 menús veganos',
        icon: 'warning',
        dangerMode: true,
      });
    } else {
      swal({
        title: 'Listo!',
        text: 'Su orden está completa',
        icon: 'success',
        dangerMode: false,
      });
    }
  }
}
