import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {WindowsTen} from '../../../../model/Laptops/Categories/windows-ten';

@Component({
  selector: 'app-windows-ten',
  templateUrl: './windows-ten.component.html',
  styleUrls: ['./windows-ten.component.scss']
})
export class WindowsTenComponent implements OnInit {

  @Input() windows_ten : WindowsTen;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getWindowsTenLaptops();
  }
  getWindowsTenLaptops()
  {
    this.menuData.getWindowsTenLaptops().subscribe(windows_ten => this.windows_ten = windows_ten);
  }
}
