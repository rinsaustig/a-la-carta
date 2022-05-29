import { OrderModel } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService],
})
export class OrderComponent implements OnInit {
  recipes: OrderModel[] = [];
  recipesVegan: OrderModel[] = [];
  images: any = [];
  imagesVegan: any = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}
  getRecipes(recibed: OrderModel[]) {
    this.recipes = recibed.filter((r) => r.vegan === false);
  }
  getRecipesVegan(recibed: OrderModel[]) {
    this.recipesVegan = recibed;
  }
  getImages() {
    this.recipes.map((res) => {
      this.images.push({
        imageSrc: res.image,
        imageAlt: res.title,
      });
    });
  }
  getVeganImages() {
    this.recipesVegan.map((res) => {
      this.imagesVegan.push({
        imageSrc: res.image,
        imageAlt: res.title,
      });
    });
  }
}
