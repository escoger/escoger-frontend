import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {FortyKToSeventyK} from '../../../../model/TVs/Prices/forty-k-to-seventy-k';

@Component({
  selector: 'app-forty-k-to-seventy-k',
  templateUrl: './forty-k-to-seventy-k.component.html',
  styleUrls: ['./forty-k-to-seventy-k.component.scss']
})
export class FortyKToSeventyKComponent implements OnInit {

  @Input() forty_k_to_seventy_k : FortyKToSeventyK;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getFortyKToSeventyK();
  }
  getFortyKToSeventyK()
  {
    this.menuData.getFortyKToSeventyK().subscribe(forty_k_to_seventy_k => this.forty_k_to_seventy_k = forty_k_to_seventy_k);
  }
}
