import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {FortyInchToFiftyFourInch} from '../../../../model/TVs/Categories/forty-inch-to-fifty-four-inch';

@Component({
  selector: 'app-forty-inch-to-fifty-four-inch',
  templateUrl: './forty-inch-to-fifty-four-inch.component.html',
  styleUrls: ['./forty-inch-to-fifty-four-inch.component.scss']
})
export class FortyInchToFiftyFourInchComponent implements OnInit {

  @Input() forty_inch_to_fiftyFour_inch : FortyInchToFiftyFourInch;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getFortyInchToFiftyFourInch();
  }

  getFortyInchToFiftyFourInch()
  {
    this.menuData.getFortyInchToFiftyFourInch().subscribe(forty_inch_to_fiftyFour_inch => this.forty_inch_to_fiftyFour_inch = forty_inch_to_fiftyFour_inch);
  }
}
