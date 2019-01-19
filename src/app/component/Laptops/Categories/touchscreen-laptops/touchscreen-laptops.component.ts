import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {TouchScreenLaptops} from '../../../../model/Laptops/Categories/touch-screen-laptops';

@Component({
  selector: 'app-touchscreen-laptops',
  templateUrl: './touchscreen-laptops.component.html',
  styleUrls: ['./touchscreen-laptops.component.scss']
})
export class TouchscreenLaptopsComponent implements OnInit {

  @Input() touchScreen_laptops : TouchScreenLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getTouchScreenLaptops();
  }
  getTouchScreenLaptops()
  {
    this.menuData.getTouchScreenLaptops().subscribe(touchScreen_laptops => this.touchScreen_laptops = touchScreen_laptops);
  }
}
