import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {LatestTvs} from '../../../../model/TVs/Categories/latest-tvs';

@Component({
  selector: 'app-latest-tvs',
  templateUrl: './latest-tvs.component.html',
  styleUrls: ['./latest-tvs.component.scss']
})
export class LatestTvsComponent implements OnInit {

  @Input() latest_tvs : LatestTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getLatestTVs();
  }
  getLatestTVs()
  {
    this.menuData.getLatestTVs().subscribe(latest_tvs => this.latest_tvs = latest_tvs);
  }
}
