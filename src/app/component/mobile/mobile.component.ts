import { Component, OnInit, Input } from '@angular/core';
import { MobileService } from '../../service/mobile.service';
import { Mobile } from '../../model/mobile';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() mobile: Mobile;
  constructor(private mobileService: MobileService) { }

  ngOnInit() {
    this.getMobiles();
  }
  
  getMobiles(): void {
    this.mobileService.getMobiles().subscribe(mobile => this.mobile = mobile);
  }
}
