import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {SonyLaptops} from '../../../../model/Laptops/Brands/sony-laptops';

@Component({
  selector: 'app-sony-laptops',
  templateUrl: './sony-laptops.component.html',
  styleUrls: ['./sony-laptops.component.scss']
})
export class SonyLaptopsComponent implements OnInit {

  @Input() sony_laptops : SonyLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getSonyLaptops();
  }
  getSonyLaptops()
  {
    this.menuData.getSonyLaptops().subscribe(sony_laptops => this.sony_laptops = sony_laptops);
  }

}
