import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {DellLaptops} from '../../../../model/Laptops/Brands/dell-laptops';

@Component({
  selector: 'app-dell-laptops',
  templateUrl: './dell-laptops.component.html',
  styleUrls: ['./dell-laptops.component.scss']
})
export class DellLaptopsComponent implements OnInit {

  @Input() dell_laptops : DellLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getDellLaptops();
  }
  getDellLaptops()
  {
    this.menuData.getDellLaptops().subscribe(dell_laptops => this.dell_laptops = dell_laptops);
  }

}
