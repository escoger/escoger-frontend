import { Component, OnInit } from '@angular/core';
import { Filter } from '../../model/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-mobile',
  templateUrl: './filter-mobile.component.html',
  styleUrls: ['./filter-mobile.component.css']
})
export class FilterMobileComponent implements OnInit {

  
  options: Filter[];
  ids = [
    { id: "Device feature", options: ["Dual Sim", "Hotspot", "Music Player", "E-Mail","GPS","Primary Camera","Touch Screen","Radio","Bluetooth Tethering"], t: 'multiple' },
    { id: "Operating System", options: ["Android","iOS", "Symbian", "Blackberry","Windows Phone"], t: 'multiple' },
    { id: "Brand", options: ["Apple","Blackberry" ,"Coolpad", "Honor", "Huawei","Lenovo","LG","Lava","Mi","MicroMax","Motorola","Nokia","Oneplus","Oppo","Samsung","Vivo"], t: 'multiple' },
    { id: "Battery Capacity", options: ["Less Than 999 mAhd", "1000 - 1999 mAh", "2000 - 2999 mAh", "3000 - 3999 mAh","4000 mAh & More"], t: 'multiple' },
    { id: "Ram", options: ["Less Than 512 MB", "1 GB", "2 GB", "3 GB","4 GB & More"], t: 'multiple' },
    { id: "Primary Camera Resolution", options: ["Up to 2.9 MP", "3 - 4.9 MP", "5 - 7.9 MP", "8 - 9.9 MP","10 MP & more"], t: 'multiple' },
    { id: "Data Transfer", options: ["GSM", "3G", "GPRS", "Edge","Wifi","4G"], t: 'multiple' },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.options = this.ids.map(function (value) {
      console.log(value);
      return new Filter(value.id, value.options, value.t);
    })
  }

  selectAction(id: string) {
    console.log(id);
  }

  log() { console.log(1); }

  onFilterChange(e, type){
    console.log(type);
    this.router.navigate(['androidmobiles']);
  }
}
