import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {FullHdResolution} from '../../../../model/TVs/Categories/full-hd-resolution';

@Component({
  selector: 'app-full-hd-resolution',
  templateUrl: './full-hd-resolution.component.html',
  styleUrls: ['./full-hd-resolution.component.scss']
})
export class FullHdResolutionComponent implements OnInit {

  @Input() full_hd_resolution : FullHdResolution;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getFullHdResolution();
  }
  getFullHdResolution()
  {
    this.menuData.getFullHdResolution().subscribe(full_hd_resolution => this.full_hd_resolution = full_hd_resolution);
  }
}
