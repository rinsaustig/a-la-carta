import { Component } from '@angular/core';
import { OrdersStore } from './components/carousel/store/carousel.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrdersStore],
})
export class AppComponent {
  title = 'a-la-carta';
}
