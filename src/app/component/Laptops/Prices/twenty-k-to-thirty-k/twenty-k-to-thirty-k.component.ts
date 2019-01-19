import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {TwentyKToThirtyK} from '../../../../model/Laptops/Prices/twenty-k-to-thirty-k';

@Component({
  selector: 'app-twenty-k-to-thirty-k',
  templateUrl: './twenty-k-to-thirty-k.component.html',
  styleUrls: ['./twenty-k-to-thirty-k.component.scss']
})
export class TwentyKToThirtyKComponent implements OnInit {

  @Input() twenty_k_to_thirty_k : TwentyKToThirtyK;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getTwentyKtoThirtyK();
  }

  getTwentyKtoThirtyK()
  {
    this.menuData.getTwentyKtoThirtyK().subscribe(twenty_k_to_thirty_k => this.twenty_k_to_thirty_k = twenty_k_to_thirty_k);
  }
}
