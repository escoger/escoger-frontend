import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {DualSimMobiles} from '../../../../model/Mobiles/Categories/dual-sim-mobiles';

@Component({
  selector: 'app-dual-sim-mobiles',
  templateUrl: './dual-sim-mobiles.component.html',
  styleUrls: ['./dual-sim-mobiles.component.scss']
})
export class DualSimMobilesComponent implements OnInit {

  @Input() dualsim_mobiles : DualSimMobiles;

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getDualSimMobiles();
  }
  getDualSimMobiles()
  {
    this.menuData.getDualSimMobiles().subscribe(dualsim_mobiles => this.dualsim_mobiles = dualsim_mobiles);
  }

}
