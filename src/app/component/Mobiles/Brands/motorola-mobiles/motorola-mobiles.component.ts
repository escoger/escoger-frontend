import { Component, OnInit, Input } from '@angular/core';
import {FetchMobileDataService} from '../../../../service/Mobiles/fetch-mobile-data.service';

import {MotorolaMobiles} from '../../../../model/Mobiles/Brands/motorola-mobiles';

@Component({
  selector: 'app-motorola-mobiles',
  templateUrl: './motorola-mobiles.component.html',
  styleUrls: ['./motorola-mobiles.component.scss']
})
export class MotorolaMobilesComponent implements OnInit {

  @Input() motorola_mobiles_url : MotorolaMobiles; 

  constructor(private menuData : FetchMobileDataService) { }

  ngOnInit() {
    this.getMotorolaMobiles();
  }
  getMotorolaMobiles()
  {
    this.menuData.getMotorolaMobiles().subscribe(motorola_mobiles_url => this.motorola_mobiles_url = motorola_mobiles_url);
  }
}
