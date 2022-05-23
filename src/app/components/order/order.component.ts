import { OrderModel } from './../../models/order.model';
import { Observable } from 'rxjs';
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

  ngOnInit(): void {
    this.orderService.getSpoonacular().subscribe((res) => {
      this.recipes = Array.from(res.results);
      console.log('recipes', this.recipes);
      this.getImages();
    });
    this.orderService.getSpoonacularVegan().subscribe((res) => {
      this.recipesVegan = Array.from(res.results);
      console.log('vegan', this.recipesVegan);
      this.getVeganImages();
    });
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
