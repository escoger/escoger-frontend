import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {ThirtyKToFortyK} from '../../../../model/Laptops/Prices/thirty-k-to-forty-k';

@Component({
  selector: 'app-thirty-k-to-forty-k',
  templateUrl: './thirty-k-to-forty-k.component.html',
  styleUrls: ['./thirty-k-to-forty-k.component.scss']
})
export class ThirtyKToFortyKComponent implements OnInit {

  @Input() thirty_k_to_forty_k : ThirtyKToFortyK;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getThirtyKtoFortyK();
  }
  getThirtyKtoFortyK()
  {
    this.menuData.getThirtyKtoFortyK().subscribe(thirty_k_to_forty_k => this.thirty_k_to_forty_k = thirty_k_to_forty_k);
  }
}
