import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {FourGMobiles} from '../../../../model/Mobiles/Categories/four-g-mobiles';

@Component({
  selector: 'app-four-g-mobiles',
  templateUrl: './four-g-mobiles.component.html',
  styleUrls: ['./four-g-mobiles.component.scss']
})
export class FourGMobilesComponent implements OnInit {

  @Input() fourg_mobiles : FourGMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getFourGMobiles();
  }
  getFourGMobiles()
  {
    this.menuData.getFourGMobiles().subscribe(fourg_mobiles => this.fourg_mobiles = fourg_mobiles);
  }

}
