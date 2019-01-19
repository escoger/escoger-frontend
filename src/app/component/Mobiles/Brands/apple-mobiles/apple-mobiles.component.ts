import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {AppleMobiles} from '../../../../model/Mobiles/Brands/apple-mobiles';

@Component({
  selector: 'app-apple-mobiles',
  templateUrl: './apple-mobiles.component.html',
  styleUrls: ['./apple-mobiles.component.scss']
})
export class AppleMobilesComponent implements OnInit {

  @Input() apple_mobiles : AppleMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getAppleMobiles();
  }

  getAppleMobiles()
  {
    this.menuData.getAppleMobiles().subscribe(apple_mobiles => this.apple_mobiles = apple_mobiles);
  }
}
