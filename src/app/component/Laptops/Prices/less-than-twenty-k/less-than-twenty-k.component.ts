import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {LessThanTwentyK} from '../../../../model/Laptops/Prices/less-than-twenty-k';

@Component({
  selector: 'app-less-than-twenty-k',
  templateUrl: './less-than-twenty-k.component.html',
  styleUrls: ['./less-than-twenty-k.component.scss']
})
export class LessThanTwentyKComponent implements OnInit {

  @Input() less_than_twenty_k : LessThanTwentyK;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getLessThanTwentyK();
  }
  getLessThanTwentyK()
  {
    this.menuData.getLessThanTwentyK().subscribe(less_than_twenty_k => this.less_than_twenty_k = less_than_twenty_k);
  }
}
