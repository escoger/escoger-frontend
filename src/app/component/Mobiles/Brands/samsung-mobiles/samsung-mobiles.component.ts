import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {SamsungMobiles} from '../../../../model/Mobiles/Brands/samsung-mobiles';

@Component({
  selector: 'app-samsung-mobiles',
  templateUrl: './samsung-mobiles.component.html',
  styleUrls: ['./samsung-mobiles.component.scss']
})
export class SamsungMobilesComponent implements OnInit {

  @Input() samsung_mobiles : SamsungMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getSamsungMobiles();
  }
  getSamsungMobiles()
  {
    this.menuData.getSamsungMobiles().subscribe(samsung_mobiles => this.samsung_mobiles = samsung_mobiles);
  }

}
