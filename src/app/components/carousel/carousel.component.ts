import { OrderModel } from './../../models/order.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
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

  constructor() { }

  ngOnInit(): void {
  }

  prev(){
    if(this.selectedIndex > 0){
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.recipes.length - 1;
    }
  }
  preVeg(){
    if(this.selectedIndexVeg > 0){
      this.selectedIndexVeg--;
    } else {
      this.selectedIndexVeg = this.recipesVegan.length - 1;
    }
  }

  next(){
    if(this.selectedIndex < this.recipes.length - 1){
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
  }
  nextVeg(){
    if(this.selectedIndexVeg < this.recipesVegan.length - 1){
      this.selectedIndexVeg++;
    } else {
      this.selectedIndexVeg = 0;
    }
  }

  addToOrder() {
    console.log('order',this.order)
    this.count++;
    if(this.count < 1){
      this.order.push(this.recipes[this.selectedIndex])
    } 
  }

}
