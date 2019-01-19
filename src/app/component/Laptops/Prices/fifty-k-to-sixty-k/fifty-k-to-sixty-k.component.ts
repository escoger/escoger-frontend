import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {FiftyKToSixtyK} from '../../../../model/Laptops/Prices/fifty-k-to-sixty-k';

@Component({
  selector: 'app-fifty-k-to-sixty-k',
  templateUrl: './fifty-k-to-sixty-k.component.html',
  styleUrls: ['./fifty-k-to-sixty-k.component.scss']
})
export class FiftyKToSixtyKComponent implements OnInit {

  @Input() fifty_k_to_sixty_k : FiftyKToSixtyK;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getFiftyKtoSixtyK();
  }
  getFiftyKtoSixtyK()
  {
    this.menuData.getFiftyKtoSixtyK().subscribe(fifty_k_to_sixty_k => this.fifty_k_to_sixty_k = fifty_k_to_sixty_k);
  }
}
