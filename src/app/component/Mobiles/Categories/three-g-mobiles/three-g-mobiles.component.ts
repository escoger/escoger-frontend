import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {ThreeGMobiles} from '../../../../model/Mobiles/Categories/three-g-mobiles';

@Component({
  selector: 'app-three-g-mobiles',
  templateUrl: './three-g-mobiles.component.html',
  styleUrls: ['./three-g-mobiles.component.scss']
})
export class ThreeGMobilesComponent implements OnInit {

  @Input() threeg_mobiles : ThreeGMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getThreeGMobiles();
  }
  getThreeGMobiles()
  {
    this.menuData.getThreeGMobiles().subscribe(threeg_mobiles => this.threeg_mobiles = threeg_mobiles);
  }
}
