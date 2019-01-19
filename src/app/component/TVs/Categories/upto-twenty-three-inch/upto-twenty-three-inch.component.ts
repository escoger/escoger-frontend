import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {UptoTwentyThreeInch} from '../../../../model/TVs/Categories/upto-twenty-three-inch';

@Component({
  selector: 'app-upto-twenty-three-inch',
  templateUrl: './upto-twenty-three-inch.component.html',
  styleUrls: ['./upto-twenty-three-inch.component.scss']
})
export class UptoTwentyThreeInchComponent implements OnInit {

  @Input() upto_twentyThree_inch : UptoTwentyThreeInch;
  
  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getUptoTwentyThreeInch();
  }
  getUptoTwentyThreeInch()
  {
    this.menuData.getUptoTwentyThreeInch().subscribe(upto_twentyThree_inch => this.upto_twentyThree_inch = upto_twentyThree_inch);
  }
}
