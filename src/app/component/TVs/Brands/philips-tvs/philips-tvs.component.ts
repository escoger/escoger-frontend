import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../../service/TVs/fetch-tv-data.service';

import {PhilipsTvs} from '../../../../model/TVs/Brands/philips-tvs';

@Component({
  selector: 'app-philips-tvs',
  templateUrl: './philips-tvs.component.html',
  styleUrls: ['./philips-tvs.component.scss']
})
export class PhilipsTvsComponent implements OnInit {

  @Input() philips_tvs : PhilipsTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getPhilipsTVs();
  }
  getPhilipsTVs()
  {
    this.menuData.getPhilipsTVs().subscribe(philips_tvs => this.philips_tvs = philips_tvs);
  }
}
