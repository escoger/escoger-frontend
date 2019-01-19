import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../service/Laptops/fetch-laptop-data.service';

import {AllLaptops} from '../../../model/Laptops/all-laptops';

@Component({
  selector: 'app-all-laptops',
  templateUrl: './all-laptops.component.html',
  styleUrls: ['./all-laptops.component.scss']
})
export class AllLaptopsComponent implements OnInit {

  @Input() all_laptops : AllLaptops;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getAllLaptops();
  }
  getAllLaptops()
  {
    this.menuData.getAllLaptops().subscribe(all_laptops => this.all_laptops = all_laptops);
  }

}
