import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {SonyTvs} from '../../../../model/TVs/Brands/sony-tvs';

@Component({
  selector: 'app-sony-tvs',
  templateUrl: './sony-tvs.component.html',
  styleUrls: ['./sony-tvs.component.scss']
})
export class SonyTvsComponent implements OnInit {

  @Input() sony_tvs : SonyTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getSonyTVs();
  }
  getSonyTVs()
  {
    this.menuData.getSonyTVs().subscribe(sony_tvs => this.sony_tvs = sony_tvs);
  }

}
