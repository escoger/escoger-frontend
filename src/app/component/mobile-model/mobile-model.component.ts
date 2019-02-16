import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mobile } from '../../model/mobile';
import { MobileService } from '../../service/mobile.service';
@Component({
  selector: 'app-mobile-model',
  templateUrl: './mobile-model.component.html',
  styleUrls: ['./mobile-model.component.css']
})
export class MobileModelComponent implements OnInit {
  @Input() modelNo: any;
  @Input() mobile : Mobile;
  constructor(private route: ActivatedRoute, private mobileService: MobileService) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.modelNo = params.model;
    });
    this.getMobile(this.modelNo);
}

getMobile(modelNo): void {
  this.mobileService.getMobile(modelNo).subscribe(mobile => this.mobile = mobile);
}
}
