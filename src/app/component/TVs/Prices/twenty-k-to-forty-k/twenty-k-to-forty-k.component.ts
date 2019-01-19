import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {TwentyKToFortyK} from '../../../../model/TVs/Prices/twenty-k-to-forty-k';

@Component({
  selector: 'app-twenty-k-to-forty-k',
  templateUrl: './twenty-k-to-forty-k.component.html',
  styleUrls: ['./twenty-k-to-forty-k.component.scss']
})
export class TwentyKToFortyKComponent implements OnInit {

  @Input() twenty_k_to_forty_k : TwentyKToFortyK;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getTwentyKToFortyK();
  }
  getTwentyKToFortyK()
  {
    this.menuData.getTwentyKToFortyK().subscribe(twenty_k_to_forty_k => this.twenty_k_to_forty_k = twenty_k_to_forty_k);
  }
}
