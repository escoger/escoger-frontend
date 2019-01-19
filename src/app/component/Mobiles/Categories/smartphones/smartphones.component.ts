import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {Smartphones} from '../../../../model/Mobiles/Categories/smartphones';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss']
})
export class SmartphonesComponent implements OnInit {

  @Input() smartphones : Smartphones;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getSmartPhones();
  }
  getSmartPhones()
  {
    this.menuData.getSmartPhones().subscribe(smartphones => this.smartphones = smartphones);
  }

}
