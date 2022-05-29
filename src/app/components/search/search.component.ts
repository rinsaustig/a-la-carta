import { OrderService } from 'src/app/services/order.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fromEvent, scan, debounce, interval } from 'rxjs';
import swal from 'sweetalert';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() recipes = new EventEmitter();
  @Output() recipesVegan = new EventEmitter();
  query: string = '';
  characters: number = 0;
  @Input() vegan: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  onSearch(event: any) {
    this.query = event.target.value;
    const keyUp = fromEvent(document, 'keyup');
    const result = keyUp.pipe(
      scan((i) => ++i, 1),
      debounce((i) => interval(100 * i))
    );
    result.subscribe((x) => (this.characters = x));
  }

  submit() {
    if (this.characters > 2) {
      if (this.vegan) {
        this.orderService.getSpoonacularVegan(this.query).subscribe((res) => {
          this.recipesVegan.emit(Array.from(res.results));
        });
      } else {
        this.orderService.getSpoonacular(this.query).subscribe((res) => {
          let recipes = Array.from(res.results);
          this.recipes.emit(recipes);
        });
      }
    } else {
      swal({
        title: 'Incorrecto',
        text: 'Debes ingresar al menos 2 caracteres',
        icon: 'warning',
        dangerMode: true,
      });
    }
  }
}
