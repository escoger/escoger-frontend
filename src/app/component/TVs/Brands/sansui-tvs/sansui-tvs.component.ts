import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {SansuiTvs} from '../../../../model/TVs/Brands/sansui-tvs';

@Component({
  selector: 'app-sansui-tvs',
  templateUrl: './sansui-tvs.component.html',
  styleUrls: ['./sansui-tvs.component.scss']
})
export class SansuiTvsComponent implements OnInit {

  @Input() sansui_tvs : SansuiTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getSansuiTVs();
  }
  getSansuiTVs()
  {
    this.menuData.getSansuiTVs().subscribe(sansui_tvs => this.sansui_tvs = sansui_tvs);
  }
}
