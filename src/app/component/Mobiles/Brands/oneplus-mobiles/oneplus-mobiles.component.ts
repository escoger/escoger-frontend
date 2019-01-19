import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {OneplusMobiles} from '../../../../model/Mobiles/Brands/oneplus-mobiles';

@Component({
  selector: 'app-oneplus-mobiles',
  templateUrl: './oneplus-mobiles.component.html',
  styleUrls: ['./oneplus-mobiles.component.scss']
})
export class OneplusMobilesComponent implements OnInit {

  @Input() oneplus_mobiles : OneplusMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getOneplusMobiles();
  }
  getOneplusMobiles()
  {
    this.menuData.getOneplusMobiles().subscribe(oneplus_mobiles => this.oneplus_mobiles = oneplus_mobiles);
  }
}
