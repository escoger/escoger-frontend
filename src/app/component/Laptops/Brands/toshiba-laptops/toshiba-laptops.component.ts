import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {ToshibaLaptops} from '../../../../model/Laptops/Brands/toshiba-laptops';

@Component({
  selector: 'app-toshiba-laptops',
  templateUrl: './toshiba-laptops.component.html',
  styleUrls: ['./toshiba-laptops.component.scss']
})
export class ToshibaLaptopsComponent implements OnInit {

  @Input() toshiba_laptops : ToshibaLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getToshibaLaptops();
  }
  getToshibaLaptops()
  {
    this.menuData.getToshibaLaptops().subscribe(toshiba_laptops => this.toshiba_laptops = toshiba_laptops);
  }
}
