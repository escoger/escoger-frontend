import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {HonorMobiles} from '../../../../model/Mobiles/Brands/honor-mobiles';

@Component({
  selector: 'app-honor-mobiles',
  templateUrl: './honor-mobiles.component.html',
  styleUrls: ['./honor-mobiles.component.scss']
})
export class HonorMobilesComponent implements OnInit {

  @Input() honor_mobiles_url : HonorMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getHonorMobiles();
  }
  getHonorMobiles()
  {
    this.menuData.getHonorMobiles().subscribe(honor_mobiles_url => this.honor_mobiles_url = honor_mobiles_url);
  }
}
