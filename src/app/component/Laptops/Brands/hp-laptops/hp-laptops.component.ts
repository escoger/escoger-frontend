import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {HpLaptops} from '../../../../model/Laptops/Brands/hp-laptops';

@Component({
  selector: 'app-hp-laptops',
  templateUrl: './hp-laptops.component.html',
  styleUrls: ['./hp-laptops.component.scss']
})
export class HpLaptopsComponent implements OnInit {

  @Input() hp_laptops : HpLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getHPLaptops();
  }
  getHPLaptops()
  {
    this.menuData.getHPLaptops().subscribe(hp_laptops => this.hp_laptops = hp_laptops);
  }
}
