import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {MicromaxTvs} from '../../../../model/TVs/Brands/micromax-tvs';

@Component({
  selector: 'app-micromax-tvs',
  templateUrl: './micromax-tvs.component.html',
  styleUrls: ['./micromax-tvs.component.scss']
})
export class MicromaxTvsComponent implements OnInit {

  @Input() micromax_tvs : MicromaxTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getMicromaxTVs();
  }
  getMicromaxTVs()
  {
    this.menuData.getMicromaxTVs().subscribe(micromax_tvs => this.micromax_tvs = micromax_tvs);
  }

}
