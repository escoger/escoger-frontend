import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {AsusLaptops} from '../../../../model/Laptops/Brands/asus-laptops';

@Component({
  selector: 'app-asus-laptops',
  templateUrl: './asus-laptops.component.html',
  styleUrls: ['./asus-laptops.component.scss']
})
export class AsusLaptopsComponent implements OnInit {

  @Input() asus_laptops : AsusLaptops; 

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getAsusLaptops();
  }
  getAsusLaptops()
  {
    this.menuData.getAsusLaptops().subscribe(asus_laptops => this.asus_laptops = asus_laptops);
  }
}
