import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {FortyKToFiftyK} from '../../../../model/Laptops/Prices/forty-k-to-fifty-k';

@Component({
  selector: 'app-forty-k-to-fifty-k',
  templateUrl: './forty-k-to-fifty-k.component.html',
  styleUrls: ['./forty-k-to-fifty-k.component.scss']
})
export class FortyKToFiftyKComponent implements OnInit {

  @Input() forty_k_to_fifty_k : FortyKToFiftyK;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getFortyKtoFiftyK();
  }
  getFortyKtoFiftyK()
  {
    this.menuData.getFortyKtoFiftyK().subscribe(forty_k_to_fifty_k => this.forty_k_to_fifty_k = forty_k_to_fifty_k);
  }
}
