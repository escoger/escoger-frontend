import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {MiTvs} from '../../../../model/TVs/Brands/mi-tvs';

@Component({
  selector: 'app-mi-tvs',
  templateUrl: './mi-tvs.component.html',
  styleUrls: ['./mi-tvs.component.scss']
})
export class MiTvsComponent implements OnInit {

  @Input() mi_tvs : MiTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getMiTVs();
  }
  getMiTVs()
  {
    this.menuData.getMiTVs().subscribe(mi_tvs => this.mi_tvs = mi_tvs);
  }
}
