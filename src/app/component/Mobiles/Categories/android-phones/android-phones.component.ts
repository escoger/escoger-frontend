import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {AndroidPhones} from '../../../../model/Mobiles/Categories/android-phones';

@Component({
  selector: 'app-android-phones',
  templateUrl: './android-phones.component.html',
  styleUrls: ['./android-phones.component.scss']
})
export class AndroidPhonesComponent implements OnInit {

  @Input() android_phones : AndroidPhones;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getAndroidPhones();
  }

  getAndroidPhones()
  {
    this.menuData.getAndroidPhones().subscribe(android_phones => this.android_phones = android_phones);
  }
}
