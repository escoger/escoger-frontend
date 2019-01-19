import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {FiveKTenK} from '../../../../model/Mobiles/Prices/five-k-ten-k';

@Component({
  selector: 'app-five-k-to-ten-k',
  templateUrl: './five-k-to-ten-k.component.html',
  styleUrls: ['./five-k-to-ten-k.component.scss']
})
export class FiveKToTenKComponent implements OnInit {

  @Input() five_k_to_ten_k : FiveKTenK;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getTenKtoFifteenK();
  }
  getTenKtoFifteenK()
    {
      this.menuData.getTenKtoFifteenK().subscribe(five_k_to_ten_k => this.five_k_to_ten_k = five_k_to_ten_k);
    }
}
