import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {AboveSixtyK} from '../../../../model/Laptops/Prices/above-sixty-k';

@Component({
  selector: 'app-above-sixty-k',
  templateUrl: './above-sixty-k.component.html',
  styleUrls: ['./above-sixty-k.component.scss']
})
export class AboveSixtyKComponent implements OnInit {

  @Input() above_sixty_k : AboveSixtyK;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getAboveSixtyK();
  }
  getAboveSixtyK()
  {
    this.menuData.getAboveSixtyK().subscribe(above_sixty_k => this.above_sixty_k = above_sixty_k);
  }
}
