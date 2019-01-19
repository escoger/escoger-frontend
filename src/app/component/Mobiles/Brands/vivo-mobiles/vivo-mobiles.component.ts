import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {VivoMobiles} from '../../../../model/Mobiles/Brands/vivo-mobiles';

@Component({
  selector: 'app-vivo-mobiles',
  templateUrl: './vivo-mobiles.component.html',
  styleUrls: ['./vivo-mobiles.component.scss']
})
export class VivoMobilesComponent implements OnInit {

  @Input() vivo_mobiles_url : VivoMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getVivoMobiles();
  }
  getVivoMobiles()
  {
    this.menuData.getVivoMobiles().subscribe(vivo_mobiles_url => this.vivo_mobiles_url = vivo_mobiles_url);
  }
}
