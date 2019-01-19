import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {TenKFifteenK} from '../../../../model/Mobiles/Prices/ten-k-fifteen-k';

@Component({
  selector: 'app-ten-k-to-fifteen-k',
  templateUrl: './ten-k-to-fifteen-k.component.html',
  styleUrls: ['./ten-k-to-fifteen-k.component.scss']
})
export class TenKToFifteenKComponent implements OnInit {

  @Input() ten_k_to_fifteen_k : TenKFifteenK;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getTenKtoFifteenK();
  }
  getTenKtoFifteenK()
  {
    this.menuData.getTenKtoFifteenK().subscribe(ten_k_to_fifteen_k => this.ten_k_to_fifteen_k = ten_k_to_fifteen_k);
  }

}
