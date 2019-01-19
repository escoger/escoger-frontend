import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {LessThanFiveK} from '../../../../model/Mobiles/Prices/less-than-five-k';

@Component({
  selector: 'app-less-than-five-k',
  templateUrl: './less-than-five-k.component.html',
  styleUrls: ['./less-than-five-k.component.scss']
})
export class LessThanFiveKComponent implements OnInit {

  @Input() less_than_five_k : LessThanFiveK;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getLessThanFiveK();
  }
  getLessThanFiveK()
  {
    this.menuData.getLessThanFiveK().subscribe(less_than_five_k => this.less_than_five_k = less_than_five_k);
  }
}
