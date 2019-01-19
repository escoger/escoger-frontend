import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {IntelCoreIFive} from '../../../../model/Laptops/Categories/intel-core-i-five';

@Component({
  selector: 'app-intel-core-i-five',
  templateUrl: './intel-core-i-five.component.html',
  styleUrls: ['./intel-core-i-five.component.scss']
})
export class IntelCoreIFiveComponent implements OnInit {

  @Input() intelCore_iFive : IntelCoreIFive; 

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getIntelCoreiFiveLaptops();
  }
  getIntelCoreiFiveLaptops()
  {
    this.menuData.getIntelCoreiFiveLaptops().subscribe(intelCore_iFive => this.intelCore_iFive = intelCore_iFive);
  }
}
