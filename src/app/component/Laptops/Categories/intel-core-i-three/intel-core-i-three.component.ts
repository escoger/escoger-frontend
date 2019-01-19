import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {IntelCoreIThree} from '../../../../model/Laptops/Categories/intel-core-i-three';

@Component({
  selector: 'app-intel-core-i-three',
  templateUrl: './intel-core-i-three.component.html',
  styleUrls: ['./intel-core-i-three.component.scss']
})
export class IntelCoreIThreeComponent implements OnInit {

  @Input() intelCore_iThree : IntelCoreIThree;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getIntelCoreiThreeLaptops();
  }
  getIntelCoreiThreeLaptops()
  {
    this.menuData.getIntelCoreiThreeLaptops().subscribe(intelCore_iThree => this.intelCore_iThree = intelCore_iThree);
  }
}
