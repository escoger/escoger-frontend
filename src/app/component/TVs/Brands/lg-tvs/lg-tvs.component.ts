import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {LgTvs} from '../../../../model/TVs/Brands/lg-tvs';

@Component({
  selector: 'app-lg-tvs',
  templateUrl: './lg-tvs.component.html',
  styleUrls: ['./lg-tvs.component.scss']
})
export class LgTvsComponent implements OnInit {

  @Input() lg_tvs : LgTvs; 

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getLgTVs();
  }
  getLgTVs()
  {
    this.menuData.getLgTVs().subscribe(lg_tvs => this.lg_tvs = lg_tvs);
  }
}
