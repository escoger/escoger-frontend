import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {TwentyFourInchToThirtyNineInch} from '../../../../model/TVs/Categories/twenty-four-inch-to-thirty-nine-inch';

@Component({
  selector: 'app-twenty-four-inch-to-thirty-nine-inch',
  templateUrl: './twenty-four-inch-to-thirty-nine-inch.component.html',
  styleUrls: ['./twenty-four-inch-to-thirty-nine-inch.component.scss']
})
export class TwentyFourInchToThirtyNineInchComponent implements OnInit {

  @Input() twentyFour_inch_to_thirtyNine_inch : TwentyFourInchToThirtyNineInch;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getTwentyFourInchToThirtyNineInch();
  }
  getTwentyFourInchToThirtyNineInch()
  {
    this.menuData.getTwentyFourInchToThirtyNineInch().subscribe(twentyFour_inch_to_thirtyNine_inch => this.twentyFour_inch_to_thirtyNine_inch = twentyFour_inch_to_thirtyNine_inch);
  }
}
