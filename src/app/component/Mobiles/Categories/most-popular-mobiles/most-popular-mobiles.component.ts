import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {MostPopularMobiles} from '../../../../model/Mobiles/Categories/most-popular-mobiles';

@Component({
  selector: 'app-most-popular-mobiles',
  templateUrl: './most-popular-mobiles.component.html',
  styleUrls: ['./most-popular-mobiles.component.scss']
})
export class MostPopularMobilesComponent implements OnInit {

  @Input() most_popular_mobiles : MostPopularMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getMostPopularMobiles();
  }
  getMostPopularMobiles()
  {
    this.menuData.getMostPopularMobiles().subscribe(most_popular_mobiles => this.most_popular_mobiles = most_popular_mobiles);
  }

}
