import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {MicrosoftLaptops} from '../../../../model//Laptops/Brands/microsoft-laptops';

@Component({
  selector: 'app-microsoft-laptops',
  templateUrl: './microsoft-laptops.component.html',
  styleUrls: ['./microsoft-laptops.component.scss']
})
export class MicrosoftLaptopsComponent implements OnInit {

  @Input() microsoft_laptops : MicrosoftLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getMicrosoftLaptops();
  }
  getMicrosoftLaptops()
  {
    this.menuData.getMicrosoftLaptops().subscribe(microsoft_laptops => this.microsoft_laptops = microsoft_laptops);
  }
}
