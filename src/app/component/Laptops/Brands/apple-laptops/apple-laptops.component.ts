import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {AppleLaptops} from '../../../../model/Laptops/Brands/apple-laptops';

@Component({
  selector: 'app-apple-laptops',
  templateUrl: './apple-laptops.component.html',
  styleUrls: ['./apple-laptops.component.scss']
})
export class AppleLaptopsComponent implements OnInit {

  @Input() apple_laptops : AppleLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getAppleLaptops();
  }
  getAppleLaptops()
  {
    this.menuData.getAppleLaptops().subscribe(apple_laptops => this.apple_laptops = apple_laptops);
  }

}
