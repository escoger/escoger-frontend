import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {SamsungLaptops} from '../../../../model/Laptops/Brands/samsung-laptops';

@Component({
  selector: 'app-samsung-laptops',
  templateUrl: './samsung-laptops.component.html',
  styleUrls: ['./samsung-laptops.component.scss']
})
export class SamsungLaptopsComponent implements OnInit {

  @Input() samsung_laptops : SamsungLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getSamsungLaptops();
  }
  getSamsungLaptops()
  {
    this.menuData.getSamsungLaptops().subscribe(samsung_laptops => this.samsung_laptops = samsung_laptops);
  }

}
