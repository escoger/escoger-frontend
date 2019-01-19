import { Component, OnInit, Input } from '@angular/core';
import {FetchLaptopDataService} from '../../../../service/Laptops/fetch-laptop-data.service';

import {LaptopsWithBacklitKeyboard} from '../../../../model/Laptops/Categories/laptops-with-backlit-keyboard';

@Component({
  selector: 'app-laptops-with-backlit-keyboard',
  templateUrl: './laptops-with-backlit-keyboard.component.html',
  styleUrls: ['./laptops-with-backlit-keyboard.component.scss']
})
export class LaptopsWithBacklitKeyboardComponent implements OnInit {

  @Input() laptops_with_backlit_keyboard : LaptopsWithBacklitKeyboard;

  constructor(private menuData : FetchLaptopDataService) { }

  ngOnInit() {
    this.getLaptopsWithBacklitKeyboard();
  }
  getLaptopsWithBacklitKeyboard()
  {
    this.menuData.getLaptopsWithBacklitKeyboard().subscribe(laptops_with_backlit_keyboard => this.laptops_with_backlit_keyboard = laptops_with_backlit_keyboard);
  }
}
