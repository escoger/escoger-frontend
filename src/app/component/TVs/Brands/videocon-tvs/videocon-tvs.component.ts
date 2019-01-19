import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {VideoconTvs} from '../../../../model/TVs/Brands/videocon-tvs';

@Component({
  selector: 'app-videocon-tvs',
  templateUrl: './videocon-tvs.component.html',
  styleUrls: ['./videocon-tvs.component.scss']
})
export class VideoconTvsComponent implements OnInit {

  @Input() videocon_tvs : VideoconTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getVideoconTVs();
  }
  getVideoconTVs()
  {
    this.menuData.getVideoconTVs().subscribe(videocon_tvs => this.videocon_tvs = videocon_tvs);
  }
}
