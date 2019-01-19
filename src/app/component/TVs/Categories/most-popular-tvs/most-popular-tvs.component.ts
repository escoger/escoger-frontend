import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {MostPopularTvs} from '../../../../model/TVs/Categories/most-popular-tvs';

@Component({
  selector: 'app-most-popular-tvs',
  templateUrl: './most-popular-tvs.component.html',
  styleUrls: ['./most-popular-tvs.component.scss']
})
export class MostPopularTvsComponent implements OnInit {

  @Input() most_popular_tvs : MostPopularTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getMostPopularTVs();
  }
  getMostPopularTVs()
  {
    this.menuData.getMostPopularTVs().subscribe(most_popular_tvs => this.most_popular_tvs = most_popular_tvs);
  }
}
