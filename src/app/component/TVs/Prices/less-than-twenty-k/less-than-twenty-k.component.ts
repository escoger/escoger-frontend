import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {LessThanTwentyK} from '../../../../model/TVs/Prices/less-than-twenty-k';

@Component({
  selector: 'app-less-than-twenty-k',
  templateUrl: './less-than-twenty-k.component.html',
  styleUrls: ['./less-than-twenty-k.component.scss']
})
export class LessThanTwentyKComponent implements OnInit {

  @Input() less_than_twenty_k : LessThanTwentyK;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getLessThanTwentyK();
  }
  getLessThanTwentyK()
  {
    this.menuData.getLessThanTwentyK().subscribe(less_than_twenty_k => this.less_than_twenty_k = less_than_twenty_k);
  }
}
