import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {MostPopularLaptops} from '../../../../model/Laptops/Categories/most-popular-laptops';

@Component({
  selector: 'app-most-popular-laptops',
  templateUrl: './most-popular-laptops.component.html',
  styleUrls: ['./most-popular-laptops.component.scss']
})
export class MostPopularLaptopsComponent implements OnInit {

  @Input() most_popular_laptops : MostPopularLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getMostPopularLaptops();
  }
  getMostPopularLaptops()
  {
    this.menuData.getMostPopularLaptops().subscribe(most_popular_laptops => this.most_popular_laptops = most_popular_laptops); 
  }
}
