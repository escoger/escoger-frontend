import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {FifteenKTwentyK} from '../../../../model/Mobiles/Prices/fifteen-k-twenty-k';

@Component({
  selector: 'app-fifteen-k-to-twenty-k',
  templateUrl: './fifteen-k-to-twenty-k.component.html',
  styleUrls: ['./fifteen-k-to-twenty-k.component.scss']
})
export class FifteenKToTwentyKComponent implements OnInit {

  @Input() fifteen_k_to_twenty_k : FifteenKTwentyK;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getFifteenKtoTwentyK();
  }
  getFifteenKtoTwentyK()
  {
    this.menuData.getFifteenKtoTwentyK().subscribe(fifteen_k_to_twenty_k => this.fifteen_k_to_twenty_k = fifteen_k_to_twenty_k);
  }
}
