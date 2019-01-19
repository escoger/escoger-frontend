import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {OnidaTvs} from '../../../../model/TVs/Brands/onida-tvs';

@Component({
  selector: 'app-onida-tvs',
  templateUrl: './onida-tvs.component.html',
  styleUrls: ['./onida-tvs.component.scss']
})
export class OnidaTvsComponent implements OnInit {

  @Input() onida_tvs : OnidaTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getOnidaTVs();
  }
  getOnidaTVs()
  {
    this.menuData.getOnidaTVs().subscribe(onida_tvs => this.onida_tvs = onida_tvs);
  }
}
