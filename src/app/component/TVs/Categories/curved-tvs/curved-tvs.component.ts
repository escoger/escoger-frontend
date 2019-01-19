import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {CurvedTvs} from '../../../../model/TVs/Categories/curved-tvs';

@Component({
  selector: 'app-curved-tvs',
  templateUrl: './curved-tvs.component.html',
  styleUrls: ['./curved-tvs.component.scss']
})
export class CurvedTvsComponent implements OnInit {

  @Input() curved_tvs : CurvedTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getCurvedTVs();
  }

  getCurvedTVs()
  {
    this.menuData.getCurvedTVs().subscribe(curved_tvs => this.curved_tvs = curved_tvs);
  }
}
