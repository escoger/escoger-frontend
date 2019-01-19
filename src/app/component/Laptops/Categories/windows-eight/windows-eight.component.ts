import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {WindowsEight} from '../../../../model/Laptops/Categories/windows-eight';

@Component({
  selector: 'app-windows-eight',
  templateUrl: './windows-eight.component.html',
  styleUrls: ['./windows-eight.component.scss']
})
export class WindowsEightComponent implements OnInit {

  @Input() windows_eight : WindowsEight;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getWindowsEightLaptops();
  }
  getWindowsEightLaptops()
  {
    this.menuData.getWindowsEightLaptops().subscribe(windows_eight => this.windows_eight = windows_eight);
  }
}
