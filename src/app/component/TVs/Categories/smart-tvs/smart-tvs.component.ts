import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {SmartTvs} from '../../../../model/TVs/Categories/smart-tvs';

@Component({
  selector: 'app-smart-tvs',
  templateUrl: './smart-tvs.component.html',
  styleUrls: ['./smart-tvs.component.scss']
})
export class SmartTvsComponent implements OnInit {

  @Input() smart_tvs : SmartTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getSmartTVs();
  }
  getSmartTVs()
  {
    this.menuData.getSmartTVs().subscribe(smart_tvs => this.smart_tvs = smart_tvs);
  }
}
