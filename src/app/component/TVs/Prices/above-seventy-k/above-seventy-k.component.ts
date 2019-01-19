import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {AboveSeventyK} from '../../../../model/TVs/Prices/above-seventy-k';

@Component({
  selector: 'app-above-seventy-k',
  templateUrl: './above-seventy-k.component.html',
  styleUrls: ['./above-seventy-k.component.scss']
})
export class AboveSeventyKComponent implements OnInit {

  @Input() above_seventy_k : AboveSeventyK;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getAboveSeventyK();
  }
  getAboveSeventyK()
  {
    this.menuData.getAboveSeventyK().subscribe(above_seventy_k => this.above_seventy_k = above_seventy_k);
  }
}
