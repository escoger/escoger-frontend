import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {IntelCoreISeven} from '../../../../model/Laptops/Categories/intel-core-i-seven';

@Component({
  selector: 'app-intel-core-i-seven',
  templateUrl: './intel-core-i-seven.component.html',
  styleUrls: ['./intel-core-i-seven.component.scss']
})
export class IntelCoreISevenComponent implements OnInit {

  @Input() intelCore_iSeven : IntelCoreISeven;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getIntelCoreiSevenLaptops();
  }
  getIntelCoreiSevenLaptops()
  {
    this.menuData.getIntelCoreiSevenLaptops().subscribe(intelCore_iSeven => this.intelCore_iSeven = intelCore_iSeven);
  }

}
