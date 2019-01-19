import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {SelfiePhones} from '../../../../model/Mobiles/Categories/selfie-phones';

@Component({
  selector: 'app-selfie-phones',
  templateUrl: './selfie-phones.component.html',
  styleUrls: ['./selfie-phones.component.scss']
})
export class SelfiePhonesComponent implements OnInit {

  @Input() selfie_phones : SelfiePhones;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getSelfiePhones();
  }
  getSelfiePhones()
  {
    this.menuData.getSelfiePhones().subscribe(selfie_phones => this.selfie_phones = selfie_phones); 
  }

}
