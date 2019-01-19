import { Component, OnInit, Input } from '@angular/core';
import {FetchTvDataService} from '../../../service/TVs/fetch-tv-data.service';

import {AllTvs} from '../../../model/TVs/all-tvs';

@Component({
  selector: 'app-all-tvs',
  templateUrl: './all-tvs.component.html',
  styleUrls: ['./all-tvs.component.scss']
})
export class AllTvsComponent implements OnInit {

  @Input() all_tvs : AllTvs;

  constructor(private menuData : FetchTvDataService) { }

  ngOnInit() {
    this.getAllTVs();
  }
  getAllTVs()
  {
    this.menuData.getAllTVs().subscribe(all_tvs => this.all_tvs = all_tvs);
  }

}
