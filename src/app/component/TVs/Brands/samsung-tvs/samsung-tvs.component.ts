import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {SamsungTvs} from '../../../../model/TVs/Brands/samsung-tvs';

@Component({
  selector: 'app-samsung-tvs',
  templateUrl: './samsung-tvs.component.html',
  styleUrls: ['./samsung-tvs.component.scss']
})
export class SamsungTvsComponent implements OnInit {

  @Input() samsung_tvs : SamsungTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getSamsungTVs();
  }
  getSamsungTVs()
  {
    this.menuData.getSamsungTVs().subscribe(samsung_tvs => this.samsung_tvs = samsung_tvs);
  }
}
