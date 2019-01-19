import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AllLaptops} from '../../model/Laptops/all-laptops';
import {AppleLaptops} from '../../model/Laptops/Brands/apple-laptops';
import {SamsungLaptops} from '../../model/Laptops/Brands/samsung-laptops';
import {SonyLaptops} from '../../model/Laptops/Brands/sony-laptops';
import {DellLaptops} from '../../model/Laptops/Brands/dell-laptops';
import {ToshibaLaptops} from '../../model/Laptops/Brands/toshiba-laptops';
import {HpLaptops} from '../../model/Laptops/Brands/hp-laptops';
import {LenovoLaptops} from '../../model/Laptops/Brands/lenovo-laptops';
import {AcerLaptops} from '../../model/Laptops/Brands/acer-laptops';
import {AsusLaptops} from '../../model/Laptops/Brands/asus-laptops';
import {MicrosoftLaptops} from '../../model/Laptops/Brands/microsoft-laptops';


import {WindowsEight} from '../../model/Laptops/Categories/windows-eight';
import {WindowsTen} from '../../model/Laptops/Categories/windows-ten';
import {GamingLaptops} from '../../model/Laptops/Categories/gaming-laptops';
import {IntelCoreISeven} from '../../model/Laptops/Categories/intel-core-i-seven';
import {IntelCoreIFive} from '../../model/Laptops/Categories/intel-core-i-five';
import {IntelCoreIThree} from '../../model/Laptops/Categories/intel-core-i-three';
import {LaptopsWithBacklitKeyboard} from '../../model/Laptops/Categories/laptops-with-backlit-keyboard';
import {TouchScreenLaptops} from '../../model/Laptops/Categories/touch-screen-laptops';
import {LatestLaptops} from '../../model/Laptops/Categories/latest-laptops';
import {MostPopularLaptops} from '../../model/Laptops/Categories/most-popular-laptops';

import {LessThanTwentyK} from '../../model/Laptops/Prices/less-than-twenty-k';
import {TwentyKToThirtyK} from '../../model/Laptops/Prices/twenty-k-to-thirty-k';
import {ThirtyKToFortyK} from '../../model/Laptops/Prices/thirty-k-to-forty-k';
import {FortyKToFiftyK} from '../../model/Laptops/Prices/forty-k-to-fifty-k';
import {FiftyKToSixtyK} from '../../model/Laptops/Prices/fifty-k-to-sixty-k';
import {AboveSixtyK} from '../../model/Laptops/Prices/above-sixty-k';

@Injectable({
  providedIn: 'root'
})
export class FetchLaptopDataService {

  constructor(private http:HttpClient) { }
  private all_laptops_url = 'http://localhost:8089/laptops/All';
  private apple_laptops_url = 'http://localhost:8089/laptops/laptopBrand/apple';
  private samsung_laptops_url = 'http://localhost:8089/laptops/laptopBrand/samsung';
  private sony_laptops_url = 'http://localhost:8089/laptops/laptopBrand/sony';
  private dell_laptops_url = 'http://localhost:8089/laptops/laptopBrand/dell';
  private toshiba_laptops_url = 'http://localhost:8089/laptops/laptopBrand/toshiba';
  private hp_laptops_url = 'http://localhost:8089/laptops/laptopBrand/hp';
  private lenovo_laptops_url = 'http://localhost:8089/laptops/laptopBrand/lenovo';
  private acer_laptops_url = 'http://localhost:8089/laptops/laptopBrand/acer';
  private asus_laptops_url = 'http://localhost:8089/laptops/laptopBrand/asus';
  private microsoft_laptops_url = 'http://localhost:8089/laptops/laptopBrand/microsoft';

  private windows_eight_url = 'http://localhost:8089/laptops/laptopCategory/windows8';
  private windows_ten_url = 'http://localhost:8089/laptops/laptopCategory/windows10';
  private gaming_laptops_url = 'http://localhost:8089/laptops/laptopCategory/gaminglaptops';
  private intelCore_iSeven_url = 'http://localhost:8089/laptops/laptopCategory/intelcorei7';
  private intelCore_iFive_url = 'http://localhost:8089/laptops/laptopCategory/intelcorei5';
  private intelCore_iThree_url = 'http://localhost:8089/laptops/laptopCategory/intelcorei3';
  private laptops_with_backlit_keyboard_url = 'http://localhost:8089/laptops/laptopCategory/laptopswithbacklitkeyboard';
  private touchscreen_laptops_url = 'http://localhost:8089/laptops/laptopCategory/touchscreenlaptops';
  private latest_laptops_url = 'http://localhost:8089/laptops/laptopCategory/latestlaptops';
  private most_popular_laptops_url = 'http://localhost:8089/laptops/laptopCategory/mostpopularlaptops';

  private less_than_twentyK_url = 'http://localhost:8089/laptops/laptopPrice/lessthan20k';
  private twentyK_to_thirtyK_url = 'http://localhost:8089/laptops/laptopPrice/20kto30k';
  private thirtyK_to_fortyK_url = 'http://localhost:8089/laptops/laptopPrice/30kto40k';
  private fortyK_to_fiftyK_url = 'http://localhost:8089/laptops/laptopPrice/40kto50k';
  private fiftyK_to_sixtyK_url = 'http://localhost:8089/laptops/laptopPrice/50kto60k';
  private above_sixtyK_url = 'http://localhost:8089/laptops/laptopPrice/above60k';

  getAllLaptops():Observable<AllLaptops>
  {
    return this.http.get<AllLaptops>(this.all_laptops_url);
    //.pipe(catchError(this.handleError('getAllLaptops')));
  }
  getAppleLaptops():Observable<AppleLaptops>
  {
    return this.http.get<AppleLaptops>(this.apple_laptops_url);
    //.pipe(catchError(this.handleError('getAppleLaptops')));
  }
  getSamsungLaptops():Observable<SamsungLaptops>
  {
    return this.http.get<SamsungLaptops>(this.samsung_laptops_url);
    //.pipe(catchError(this.handleError('getSamsungLaptops')));
  }
  getSonyLaptops():Observable<SonyLaptops>
  {
    return this.http.get<SonyLaptops>(this.sony_laptops_url);
    //.pipe(catchError(this.handleError('getSonyLaptops')));
  }
  getDellLaptops():Observable<DellLaptops>
  {
    return this.http.get<DellLaptops>(this.dell_laptops_url);
    //.pipe(catchError(this.handleError('getDellLaptops')));
  }
  getToshibaLaptops():Observable<ToshibaLaptops>
  {
    return this.http.get<ToshibaLaptops>(this.toshiba_laptops_url);
    //.pipe(catchError(this.handleError('getToshibaLaptops')));
  }
  getHPLaptops():Observable<HpLaptops>
  {
    return this.http.get<HpLaptops>(this.hp_laptops_url);
    //.pipe(catchError(this.handleError('getHPLaptops')));
  }
  getLenovoLaptops():Observable<LenovoLaptops>
  {
    return this.http.get<LenovoLaptops>(this.lenovo_laptops_url);
    //.pipe(catchError(this.handleError('getLenovoLaptops')));
  }
  getAcerLaptops():Observable<AcerLaptops>
  {
    return this.http.get<AcerLaptops>(this.acer_laptops_url);
    //.pipe(catchError(this.handleError('getAcerLaptops')));
  }
  getAsusLaptops():Observable<AsusLaptops>
  {
    return this.http.get<AsusLaptops>(this.asus_laptops_url);
    //.pipe(catchError(this.handleError('getAsusLaptops')));
  }
  getMicrosoftLaptops():Observable<MicrosoftLaptops>
  {
    return this.http.get<MicrosoftLaptops>(this.microsoft_laptops_url);
    //.pipe(catchError(this.handleError('getMicrosoftLaptops')));
  }


  getWindowsEightLaptops():Observable<WindowsEight>
  {
    return this.http.get<WindowsEight>(this.windows_eight_url);
    //.pipe(catchError(this.handleError('getWindowsEightLaptops')));
  }
  getWindowsTenLaptops():Observable<WindowsTen>
  {
    return this.http.get<WindowsTen>(this.windows_ten_url);
    //.pipe(catchError(this.handleError('getWindowsTenLaptops')));
  }
  getGamingLaptops():Observable<GamingLaptops>
  {
    return this.http.get<GamingLaptops>(this.gaming_laptops_url);
    //.pipe(catchError(this.handleError('getGamingLaptops')));
  }
  getIntelCoreiSevenLaptops():Observable<IntelCoreISeven>
  {
    return this.http.get<IntelCoreISeven>(this.intelCore_iSeven_url);
    //.pipe(catchError(this.handleError('getIntelCoreiSevenLaptops')));
  }
  getIntelCoreiFiveLaptops():Observable<IntelCoreIFive>
  {
    return this.http.get<IntelCoreIFive>(this.intelCore_iFive_url);
    //.pipe(catchError(this.handleError('getIntelCoreiFiveLaptops')));
  }
  getIntelCoreiThreeLaptops():Observable<IntelCoreIThree>
  {
    return this.http.get<IntelCoreIThree>(this.intelCore_iThree_url);
    //.pipe(catchError(this.handleError('getIntelCoreiThreeLaptops')));
  }
  getLaptopsWithBacklitKeyboard():Observable<LaptopsWithBacklitKeyboard>
  {
    return this.http.get<LaptopsWithBacklitKeyboard>(this.laptops_with_backlit_keyboard_url);
    //.pipe(catchError(this.handleError('getLaptopsWithBacklitKeyboard')));
  }
  getTouchScreenLaptops():Observable<TouchScreenLaptops>
  {
    return this.http.get<TouchScreenLaptops>(this.touchscreen_laptops_url);
    //.pipe(catchError(this.handleError('getTouchScreenLaptops')));
  }
  getLatestLaptops():Observable<LatestLaptops>
  {
    return this.http.get<LatestLaptops>(this.latest_laptops_url);
    //.pipe(catchError(this.handleError('getLatestLaptops')));
  }
  getMostPopularLaptops():Observable<MostPopularLaptops>
  {
    return this.http.get<MostPopularLaptops>(this.most_popular_laptops_url);
    //.pipe(catchError(this.handleError('getMostPopularLaptops')));
  }

  getLessThanTwentyK():Observable<LessThanTwentyK>
  {
    return this.http.get<LessThanTwentyK>(this.less_than_twentyK_url);
    //.pipe(catchError(this.handleError('getLessThanTwentyK')));
  }
  getTwentyKtoThirtyK():Observable<TwentyKToThirtyK>
  {
    return this.http.get<TwentyKToThirtyK>(this.twentyK_to_thirtyK_url);
    //.pipe(catchError(this.handleError('getTwentyKtoThirtyK')));
  }
  getThirtyKtoFortyK():Observable<ThirtyKToFortyK>
  {
    return this.http.get<ThirtyKToFortyK>(this.thirtyK_to_fortyK_url);
    //.pipe(catchError(this.handleError('getThirtyKtoFortyK')));
  }
  getFortyKtoFiftyK():Observable<FortyKToFiftyK>
  {
    return this.http.get<FortyKToFiftyK>(this.fortyK_to_fiftyK_url);
    //.pipe(catchError(this.handleError('getFortyKtoFiftyK')));
  }
  getFiftyKtoSixtyK():Observable<FiftyKToSixtyK>
  {
    return this.http.get<FiftyKToSixtyK>(this.fiftyK_to_sixtyK_url);
    //.pipe(catchError(this.handleError('getFiftyKtoSixtyK')));
  }
  getAboveSixtyK():Observable<AboveSixtyK>
  {
    return this.http.get<AboveSixtyK>(this.above_sixtyK_url);
    //.pipe(catchError(this.handleError('getAboveSixtyK')));
  }
  
  /*private handleError<T>(operation = 'operation', result?:T)
  {
    console.log("get all mobiles failure");
  }*/
}
