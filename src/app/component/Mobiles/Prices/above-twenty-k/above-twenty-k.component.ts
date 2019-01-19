import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';
import {AboveTwentyK} from '../../../../model/Mobiles/Prices/above-twenty-k';

@Component({
  selector: 'app-above-twenty-k',
  templateUrl: './above-twenty-k.component.html',
  styleUrls: ['./above-twenty-k.component.scss']
})
export class AboveTwentyKComponent implements OnInit {

  @Input() above_twenty_k : AboveTwentyK;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getAboveTwentyK();
  }
  getAboveTwentyK()
  {
    this.menuData.getAboveTwentyK().subscribe(above_twenty_k => this.above_twenty_k = above_twenty_k);
  }
}
