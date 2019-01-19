import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {AcerLaptops} from '../../../../model/Laptops/Brands/acer-laptops';

@Component({
  selector: 'app-acer-laptops',
  templateUrl: './acer-laptops.component.html',
  styleUrls: ['./acer-laptops.component.scss']
})
export class AcerLaptopsComponent implements OnInit {

  @Input() acer_laptops : AcerLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getAcerLaptops();
  }
  getAcerLaptops()
  {
    this.menuData.getAcerLaptops().subscribe(acer_laptops => this.acer_laptops = acer_laptops);
  }
}
