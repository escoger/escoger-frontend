import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {LatestMobiles} from '../../../../model/Mobiles/Categories/latest-mobiles';

@Component({
  selector: 'app-latest-mobiles',
  templateUrl: './latest-mobiles.component.html',
  styleUrls: ['./latest-mobiles.component.scss']
})
export class LatestMobilesComponent implements OnInit {

  @Input() latest_mobiles : LatestMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getLatestMobiles();
  }
  getLatestMobiles()
  {
    this.menuData.getLatestMobiles().subscribe(latest_mobiles => this.latest_mobiles = latest_mobiles);
  }
}
