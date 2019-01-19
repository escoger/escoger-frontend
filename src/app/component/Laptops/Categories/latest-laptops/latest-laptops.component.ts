import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {LatestLaptops} from '../../../../model/Laptops/Categories//latest-laptops';

@Component({
  selector: 'app-latest-laptops',
  templateUrl: './latest-laptops.component.html',
  styleUrls: ['./latest-laptops.component.scss']
})
export class LatestLaptopsComponent implements OnInit {

  @Input() latest_laptops : LatestLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getLatestLaptops();
  }
  getLatestLaptops()
  {
    this.menuData.getLatestLaptops().subscribe(latest_laptops => this.latest_laptops = latest_laptops);
  }
}
