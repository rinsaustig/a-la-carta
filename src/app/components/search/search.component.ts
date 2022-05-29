import { OrderService } from 'src/app/services/order.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() recipes = new EventEmitter();
  query: string = '';
  @Input() vegan: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  onSearch(event: any) {
    return (this.query = event.target.value);
  }

  submit() {
    this.orderService.getSpoonacular(this.query).subscribe((res) => {
      this.recipes.emit(Array.from(res.results));
      console.log('recipes', this.query);
    });
    // this.orderService.getSpoonacularVegan().subscribe((res) => {
    //   this.recipesVegan = Array.from(res.results);
    //   console.log('vegan', this.recipesVegan);
    //   this.getVeganImages();
    // });
    // });
  }
}
