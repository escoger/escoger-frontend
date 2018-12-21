import { Injectable } from '@angular/core';
import { Mobile } from '../model/mobile';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private mobileUrl = 'http://localhost:8089/mobiles/All';

  constructor(private http: HttpClient){}
  
  getMobiles(): Observable<Mobile> {
    return this.http.get<Mobile>(this.mobileUrl);
  }
}
