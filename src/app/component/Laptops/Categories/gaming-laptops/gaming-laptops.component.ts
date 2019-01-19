import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {GamingLaptops} from '../../../../model/Laptops/Categories/gaming-laptops';

@Component({
  selector: 'app-gaming-laptops',
  templateUrl: './gaming-laptops.component.html',
  styleUrls: ['./gaming-laptops.component.scss']
})
export class GamingLaptopsComponent implements OnInit {

  @Input() gaming_laptops : GamingLaptops;
 
  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getGamingLaptops();
  }
  getGamingLaptops()
  {
    this.menuData.getGamingLaptops().subscribe(gaming_laptops => this.gaming_laptops = gaming_laptops);
  }

}
