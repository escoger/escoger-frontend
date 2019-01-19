import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {ThreeDTvs} from '../../../../model/TVs/Categories/three-d-tvs';

@Component({
  selector: 'app-three-d-tvs',
  templateUrl: './three-d-tvs.component.html',
  styleUrls: ['./three-d-tvs.component.scss']
})
export class ThreeDTvsComponent implements OnInit {

  @Input() threeD_tvs : ThreeDTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getThreeDTVs();
  }
  getThreeDTVs()
  {
    this.menuData.getThreeDTVs().subscribe(threeD_tvs => this.threeD_tvs = threeD_tvs);
  }
}
