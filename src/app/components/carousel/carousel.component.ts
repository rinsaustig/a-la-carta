import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string; 
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = [];
  @Input() imagesVegan: carouselImage[] = [];
  @Input() indicators = true;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    console.log (this.images);
  }

  prev(){
    if(this.selectedIndex > 0){
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.images.length - 1;
    }
  }

  next(){
    if(this.selectedIndex < this.images.length - 1){
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
  }

}
