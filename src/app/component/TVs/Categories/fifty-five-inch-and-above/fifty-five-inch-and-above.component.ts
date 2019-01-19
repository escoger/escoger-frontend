import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {FiftyFiveInchAndAbove} from '../../../../model/TVs/Categories/fifty-five-inch-and-above';

@Component({
  selector: 'app-fifty-five-inch-and-above',
  templateUrl: './fifty-five-inch-and-above.component.html',
  styleUrls: ['./fifty-five-inch-and-above.component.scss']
})
export class FiftyFiveInchAndAboveComponent implements OnInit {

  @Input() fiftyFive_inch_and_above : FiftyFiveInchAndAbove;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getFiftyFiveInchAndAbove();
  }

  getFiftyFiveInchAndAbove()
  {
    this.menuData.getFiftyFiveInchAndAbove().subscribe(fiftyFive_inch_and_above => this.fiftyFive_inch_and_above = fiftyFive_inch_and_above);
  }
}
