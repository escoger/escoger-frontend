import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AllMobiles} from '../../model/Mobiles/all-mobiles';
import {NokiaMobiles} from '../../model/Mobiles/Brands/nokia-mobiles';
import {SamsungMobiles} from '../../model/Mobiles/Brands/samsung-mobiles';
import {AppleMobiles} from '../../model/Mobiles/Brands/apple-mobiles';
import {MiMobiles} from '../../model/Mobiles/Brands/mi-mobiles';
import {OneplusMobiles} from '../../model/Mobiles/Brands/oneplus-mobiles';
import {MotorolaMobiles} from '../../model/Mobiles/Brands/motorola-mobiles';
import {VivoMobiles} from '../../model/Mobiles/Brands/vivo-mobiles';
import {HonorMobiles} from '../../model/Mobiles/Brands/honor-mobiles'

import {Smartphones} from '../../model/Mobiles/Categories/smartphones';
import {AndroidPhones} from '../../model/Mobiles/Categories/android-phones';
import {FourGMobiles} from '../../model/Mobiles/Categories/four-g-mobiles';
import {ThreeGMobiles} from '../../model/Mobiles/Categories/three-g-mobiles';
import {DualSimMobiles} from '../../model/Mobiles/Categories/dual-sim-mobiles';
import {SelfiePhones} from '../../model/Mobiles/Categories/selfie-phones';
import {LatestMobiles} from '../../model/Mobiles/Categories/latest-mobiles';
import {MostPopularMobiles} from '../../model/Mobiles/Categories/most-popular-mobiles';

import {LessThanFiveK} from '../../model/Mobiles/Prices/less-than-five-k';
import {FiveKTenK} from '../../model/Mobiles/Prices/five-k-ten-k';
import {TenKFifteenK} from '../../model/Mobiles/Prices/ten-k-fifteen-k';
import {FifteenKTwentyK} from '../../model/Mobiles/Prices/fifteen-k-twenty-k';
import {AboveTwentyK} from '../../model/Mobiles/Prices/above-twenty-k';

@Injectable({
  providedIn: 'root'
})
export class FetchMobileDataService {

  constructor(private http:HttpClient) { }
  private all_mobiles_url = 'http://localhost:8089/mobiles/All';
  private nokia_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/nokia';
  private samsung_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/samsung';
  private apple_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/apple';
  private mi_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/mi';
  private oneplus_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/oneplus';
  private motorola_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/motorola';
  private vivo_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/vivo';
  private honor_mobiles_url = 'http://localhost:8089/mobiles/mobileBrand/honor';

  private smart_phones_url = 'http://localhost:8089/mobiles/mobileCategory/smartphones';
  private android_phones_url = 'http://localhost:8089/mobiles/mobileCategory/androidphones';
  private fourg_mobiles_url = 'http://localhost:8089/mobiles/mobileCategory/4gmobiles';
  private threeg_mobiles_url = 'http://localhost:8089/mobiles/mobileCategory/3gmobiles';
  private dualsim_mobiles_url = 'http://localhost:8089/mobiles/mobileCategory/dualsimmobiles';
  private selfie_phones_url = 'http://localhost:8089/mobiles/mobileCategory/selfiephones';
  private latest_mobiles_url = 'http://localhost:8089/mobiles/mobileCategory/latestmobiles';
  private mostpopular_mobiles_url = 'http://localhost:8089/mobiles/mobileCategory/mostpopularmobiles';

  private less_than_fiveK_url = 'http://localhost:8089/mobiles/mobilePrice/lessthan5k';
  private fiveK_to_tenK_url = 'http://localhost:8089/mobiles/mobilePrice/5kto10k';
  private tenK_to_fifteenK_url = 'http://localhost:8089/mobiles/mobilePrice/10kto15k';
  private fifteenK_to_twentyK_url = 'http://localhost:8089/mobiles/mobilePrice/15kto20k';
  private above_twentyK_url = 'http://localhost:8089/mobiles/mobilePrice/above20k';
 
  getAllMobiles():Observable<AllMobiles>
  {
    return this.http.get<AllMobiles>(this.all_mobiles_url);
    //.pipe(catchError(this.handleError('getAllMobiles')));
  }
  getNokiaMobiles():Observable<NokiaMobiles>
  {
    return this.http.get<NokiaMobiles>(this.nokia_mobiles_url);
    //.pipe(catchError(this.handleError('getNokiaMobiles')));
  }
  getSamsungMobiles():Observable<SamsungMobiles>
  {
    return this.http.get<SamsungMobiles>(this.samsung_mobiles_url);
    //.pipe(catchError(this.handleError('getSamsungMobiles')));
  }
  getAppleMobiles():Observable<AppleMobiles>
  {
    return this.http.get<AppleMobiles>(this.apple_mobiles_url);
    //.pipe(catchError(this.handleError('getAppleMobiles')));
  }
  getMiMobiles():Observable<MiMobiles>
  {
    return this.http.get<MiMobiles>(this.mi_mobiles_url);
    //.pipe(catchError(this.handleError('getMiMobiles')));
  }
  getOneplusMobiles():Observable<OneplusMobiles>
  {
    return this.http.get<OneplusMobiles>(this.oneplus_mobiles_url);
    //.pipe(catchError(this.handleError('getOneplusMobiles')));
  }
  getMotorolaMobiles():Observable<MotorolaMobiles>
  {
    return this.http.get<MotorolaMobiles>(this.motorola_mobiles_url);
    //.pipe(catchError(this.handleError('getMotorolaMobiles')));
  }
  getVivoMobiles():Observable<VivoMobiles>
  {
    return this.http.get<VivoMobiles>(this.vivo_mobiles_url);
    //.pipe(catchError(this.handleError('getVivoMobiles')));
  }
  getHonorMobiles():Observable<HonorMobiles>
  {
    return this.http.get<HonorMobiles>(this.honor_mobiles_url);
    //.pipe(catchError(this.handleError('getHonorMobiles')));
  }

  getSmartPhones():Observable<Smartphones>
  {
    return this.http.get<Smartphones>(this.smart_phones_url);
    //.pipe(catchError(this.handleError('getSmartPhones')));
  }
  getAndroidPhones():Observable<AndroidPhones>
  {
    return this.http.get<AndroidPhones>(this.android_phones_url);
    //.pipe(catchError(this.handleError('getAndroidPhones')));
  }
  getFourGMobiles():Observable<FourGMobiles>
  {
    return this.http.get<FourGMobiles>(this.fourg_mobiles_url);
    //.pipe(catchError(this.handleError('getFourGMobiles')));
  }
  getThreeGMobiles():Observable<ThreeGMobiles>
  {
    return this.http.get<ThreeGMobiles>(this.threeg_mobiles_url);
    //.pipe(catchError(this.handleError('getThreeGMobiles')));
  }
  getDualSimMobiles():Observable<DualSimMobiles>
  {
    return this.http.get<DualSimMobiles>(this.dualsim_mobiles_url);
    //.pipe(catchError(this.handleError('getDualSimMobiles')));
  }
  getSelfiePhones():Observable<SelfiePhones>
  {
    return this.http.get<SelfiePhones>(this.selfie_phones_url);
    //.pipe(catchError(this.handleError('getSelfiePhones')));
  }
  getLatestMobiles():Observable<LatestMobiles>
  {
    return this.http.get<LatestMobiles>(this.latest_mobiles_url);
    //.pipe(catchError(this.handleError('getLatestMobiles')));
  }
  getMostPopularMobiles():Observable<MostPopularMobiles>
  {
    return this.http.get<MostPopularMobiles>(this.mostpopular_mobiles_url);
    //.pipe(catchError(this.handleError('getMOstPopularMobiles')));
  }
  getLessThanFiveK():Observable<LessThanFiveK>
  {
    return this.http.get<LessThanFiveK>(this.less_than_fiveK_url);
    //.pipe(catchError(this.handleError('getLessThanFiveK')));
  }
  getFiveKtoTenK():Observable<FiveKTenK>
  {
    return this.http.get<FiveKTenK>(this.fiveK_to_tenK_url);
    //.pipe(catchError(this.handleError('getFiveKtoTenK')));
  }
  getTenKtoFifteenK():Observable<TenKFifteenK>
  {
    return this.http.get<TenKFifteenK>(this.tenK_to_fifteenK_url);
    //.pipe(catchError(this.handleError('getTenKtoFifteenK')));
  }
  getFifteenKtoTwentyK():Observable<FifteenKTwentyK>
  {
    return this.http.get<FifteenKTwentyK>(this.fifteenK_to_twentyK_url);
    //.pipe(catchError(this.handleError('getFifteenKtoTwentyK')));
  }
  getAboveTwentyK():Observable<AboveTwentyK>
  {
    return this.http.get<AboveTwentyK>(this.above_twentyK_url);
    //.pipe(catchError(this.handleError('getAboveTwentyK')));
  }

  /*private handleError<T>(operation = 'operation', result?:T)
  {
    console.log("get all mobiles failure");
  }*/

}
