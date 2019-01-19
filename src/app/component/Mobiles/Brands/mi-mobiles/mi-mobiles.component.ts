import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {MiMobiles} from '../../../../model/Mobiles/Brands/mi-mobiles';

@Component({
  selector: 'app-mi-mobiles',
  templateUrl: './mi-mobiles.component.html',
  styleUrls: ['./mi-mobiles.component.scss']
})
export class MiMobilesComponent implements OnInit {

  @Input() mi_mobiles : MiMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getMiMobiles();
  }
  getMiMobiles()
  {
    this.menuData.getMiMobiles().subscribe(mi_mobiles => this.mi_mobiles = mi_mobiles);
  }

}
