import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {NokiaMobiles} from '../../../../model/Mobiles/Brands/nokia-mobiles';

@Component({
  selector: 'app-nokia-mobiles',
  templateUrl: './nokia-mobiles.component.html',
  styleUrls: ['./nokia-mobiles.component.scss']
})
export class NokiaMobilesComponent implements OnInit {

  @Input() nokia_mobiles : NokiaMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getNokiaMobiles();
  }

  getNokiaMobiles()
  {
    this.menuData.getNokiaMobiles().subscribe(nokia_mobiles => this.nokia_mobiles = nokia_mobiles);
  }
}
