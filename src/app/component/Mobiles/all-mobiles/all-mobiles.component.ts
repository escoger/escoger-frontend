import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../service/Mobiles/fetch-mobile-data.service';

import {AllMobiles} from '../../../model/mobiles/all-mobiles';

@Component({
  selector: 'app-all-mobiles',
  templateUrl: './all-mobiles.component.html',
  styleUrls: ['./all-mobiles.component.scss']
})
export class AllMobilesComponent implements OnInit {

  @Input() all_mobiles : AllMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getAllMobiles();
  }
  getAllMobiles()
  {
    this.menuData.getAllMobiles().subscribe(all_mobiles => this.all_mobiles = all_mobiles);
  }
}
