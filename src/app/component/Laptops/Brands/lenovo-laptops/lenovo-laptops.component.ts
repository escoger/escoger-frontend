import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {LenovoLaptops} from '../../../../model/Laptops/Brands/lenovo-laptops';

@Component({
  selector: 'app-lenovo-laptops',
  templateUrl: './lenovo-laptops.component.html',
  styleUrls: ['./lenovo-laptops.component.scss']
})
export class LenovoLaptopsComponent implements OnInit {

  @Input() lenovo_laptops : LenovoLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getLenovoLaptops();
  }
  getLenovoLaptops()
  {
    this.menuData.getLenovoLaptops().subscribe(lenovo_laptops => this.lenovo_laptops = lenovo_laptops);
  }
}
