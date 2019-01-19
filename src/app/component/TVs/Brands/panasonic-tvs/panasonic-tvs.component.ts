import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {PanasonicTvs} from '../../../../model/TVs/Brands/panasonic-tvs';

@Component({
  selector: 'app-panasonic-tvs',
  templateUrl: './panasonic-tvs.component.html',
  styleUrls: ['./panasonic-tvs.component.scss']
})
export class PanasonicTvsComponent implements OnInit {

  @Input() panasonic_tvs : PanasonicTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
  this.getPanasonicTVs();
  }
  getPanasonicTVs()
  {
    this.menuData.getPanasonicTVs().subscribe(panasonic_tvs => this.panasonic_tvs = panasonic_tvs);
  }
}
