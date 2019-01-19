import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AllTvs} from '../../model/TVs/all-tvs';

import {SonyTvs} from '../../model/TVs/Brands/sony-tvs';
import {SamsungTvs} from '../../model/TVs/Brands/samsung-tvs';
import {MiTvs} from '../../model/TVs/Brands/mi-tvs';
import {PanasonicTvs} from '../../model/TVs/Brands/panasonic-tvs';
import {LgTvs} from '../../model/TVs/Brands/lg-tvs';
import {MicromaxTvs} from '../../model/TVs/Brands/micromax-tvs';
import {OnidaTvs} from '../../model/TVs/Brands/onida-tvs';
import {VideoconTvs} from '../../model/TVs/Brands/videocon-tvs';
import {SansuiTvs} from '../../model/TVs/Brands/sansui-tvs';
import {PhilipsTvs} from '../../model/TVs/Brands/philips-tvs';

import {SmartTvs} from '../../model/TVs/Categories/smart-tvs';
import {CurvedTvs} from '../../model/TVs/Categories/curved-tvs';
import {ThreeDTvs} from '../../model/TVs/Categories/three-d-tvs';
import {FullHdResolution} from '../../model/TVs/Categories/full-hd-resolution';
import {UptoTwentyThreeInch} from '../../model/TVs/Categories/upto-twenty-three-inch';
import {TwentyFourInchToThirtyNineInch} from '../../model/TVs/Categories/twenty-four-inch-to-thirty-nine-inch';
import {FortyInchToFiftyFourInch} from '../../model/TVs/Categories/forty-inch-to-fifty-four-inch';
import {FiftyFiveInchAndAbove} from '../../model/TVs/Categories/fifty-five-inch-and-above';
import {LatestTvs} from '../../model/TVs/Categories/latest-tvs';
import {MostPopularTvs} from '../../model/TVs/Categories/most-popular-tvs';

import {LessThanTwentyK} from '../../model/TVs/Prices/less-than-twenty-k';
import {TwentyKToFortyK} from '../../model/TVs/Prices/twenty-k-to-forty-k';
import {FortyKToSeventyK} from '../../model/TVs/Prices/forty-k-to-seventy-k';
import {AboveSeventyK} from '../../model/TVs/Prices/above-seventy-k';

@Injectable({
  providedIn: 'root'
})
export class FetchTvDataService {

  constructor(private http:HttpClient) { }
  private all_tvs_url = 'http://localhost:8089/televisions/All';

  private sony_tvs_url = 'http://localhost:8089/televisions/tvBrand/sony';
  private samsung_tvs_url = 'http://localhost:8089/televisions/tvBrand/samsung';
  private mi_tvs_url = 'http://localhost:8089/televisions/tvBrand/mi'
  private panasonic_tvs_url = 'http://localhost:8089/televisions/tvBrand/panasonic';
  private lg_tvs_url = 'http://localhost:8089/televisions/tvBrand/lg';
  private micromax_tvs_url = 'http://localhost:8089/televisions/tvBrand/micromax';
  private onida_tvs_url = 'http://localhost:8089/televisions/tvBrand/onida';
  private videocon_tvs_url = 'http://localhost:8089/televisions/tvBrand/videocon';
  private sansui_tvs_url = 'http://localhost:8089/televisions/tvBrand/sansui';
  private philips_tvs_url = 'http://localhost:8089/televisions/tvBrand/philips';

  private smart_tvs_url = 'http://localhost:8089/televisions/tvCategory/smarttvs';
  private curved_tvs_url = 'http://localhost:8089/televisions/tvCategory/curvedtvs';
  private threeD_tvs_url = 'http://localhost:8089/televisions/tvCategory/3dtvs';
  private full_hd_resolution_url = 'http://localhost:8089/televisions/tvCategory/fullhdresolution';
  private upto_twentyThree_inch__url = 'http://localhost:8089/televisions/tvCategory/upto23inch';
  private twentyFour_inch_to_thirtyNine_inch_url = 'http://localhost:8089/televisions/tvCategory/24inchto39inch/';
  private forty_inch_to_fiftyFour_inch_url = 'http://localhost:8089/televisions/tvCategory/40inchto54inch';
  private fiftyFive_inch_and_above_url = 'http://localhost:8089/televisions/tvCategory/55inchandabove';
  private latest_tvs_url = 'http://localhost:8089/televisions/tvCategory/latesttvs';
  private most_popular_tvs_url = 'http://localhost:8089/televisions/tvCategory/mostpopulartvs';
  
  private lessThan_twentyK_url = 'http://localhost:8089/televisions/tvPrice/lessthan20k';
  private twentyK_to_FortyK_url = 'http://localhost:8089/televisions/tvPrice/20kto40k';
  private fortyK_to_seventyK_url = 'http://localhost:8089/televisions/tvPrice/40kto70k';
  private above_seventyK_url = 'http://localhost:8089/televisions/tvPrice/above70k';

  getAllTVs():Observable<AllTvs>
  {
    return this.http.get<AllTvs>(this.all_tvs_url);
    //.pipe(catchError(this.handleError('getAllTVs')));
  }

  getSonyTVs():Observable<SonyTvs>
  {
    return this.http.get<SonyTvs>(this.sony_tvs_url);
    //.pipe(catchError(this.handleError('getSonyTVs')));
  }
  getSamsungTVs():Observable<SamsungTvs>
  {
    return this.http.get<SamsungTvs>(this.samsung_tvs_url);
    //.pipe(catchError(this.handleError('getSamsungTVs')));
  }
  getMiTVs():Observable<MiTvs>
  {
    return this.http.get<MiTvs>(this.mi_tvs_url);
    //.pipe(catchError(this.handleError('getMiTVs')));
  }
  getPanasonicTVs():Observable<PanasonicTvs>
  {
    return this.http.get<PanasonicTvs>(this.panasonic_tvs_url);
    //.pipe(catchError(this.handleError('getPanasonicTVs')));
  }
  getLgTVs():Observable<LgTvs>
  {
    return this.http.get<LgTvs>(this.lg_tvs_url);
    //.pipe(catchError(this.handleError('getLgTVs')));
  }
  getMicromaxTVs():Observable<MicromaxTvs>
  {
    return this.http.get<MicromaxTvs>(this.micromax_tvs_url);
    //.pipe(catchError(this.handleError('getMicromaxTVs'))); 
  }
  getOnidaTVs():Observable<OnidaTvs>
  {
    return this.http.get<OnidaTvs>(this.onida_tvs_url);
    //.pipe(catchError(this.handleError('getOnidaTVs')));
  }
  getVideoconTVs():Observable<VideoconTvs>
  {
    return this.http.get<VideoconTvs>(this.videocon_tvs_url);
    //.pipe(catchError(this.handleError('getVideoconTVs')));
  }
  getSansuiTVs():Observable<SansuiTvs>
  {
    return this.http.get<SansuiTvs>(this.sansui_tvs_url);
    //.pipe(catchError(this.handleError('getSansuiTVs')));
  }
  getPhilipsTVs():Observable<PhilipsTvs>
  {
    return this.http.get<PhilipsTvs>(this.philips_tvs_url);
    //.pipe(catchError(this.handleError('getPhilipsTVs')));
  }
  
  getSmartTVs():Observable<SmartTvs>
  {
    return this.http.get<SmartTvs>(this.smart_tvs_url);
    //.pipe(catchError(this.handleError('getSmartTVs')));
  }

  getCurvedTVs():Observable<CurvedTvs>
  {
    return this.http.get<CurvedTvs>(this.curved_tvs_url);
    //.pipe(catchError(this.handleError('getCurvedTVs')));
  }
  getThreeDTVs():Observable<ThreeDTvs>
  {
    return this.http.get<ThreeDTvs>(this.threeD_tvs_url);
    //.pipe(catchError(this.handleError('getThreeDTVs')));
  }
  getFullHdResolution():Observable<FullHdResolution>
  {
    return this.http.get<FullHdResolution>(this.full_hd_resolution_url);
    //.pipe(catchError(this.handleError('getFullHdResolution')));
  }
  getUptoTwentyThreeInch():Observable<UptoTwentyThreeInch>
  {
    return this.http.get<UptoTwentyThreeInch>(this.upto_twentyThree_inch__url);
    //.pipe(catchError(this.handleError('getUptoTwentyThreeInch')));
  }
  getTwentyFourInchToThirtyNineInch():Observable<TwentyFourInchToThirtyNineInch>
  {
    return this.http.get<TwentyFourInchToThirtyNineInch>(this.twentyFour_inch_to_thirtyNine_inch_url);
    //.pipe(catchError(this.handleError('getTwentyFourInchToThirtyNineInch')));
  }
  getFortyInchToFiftyFourInch():Observable<FortyInchToFiftyFourInch>
  {
    return this.http.get<FortyInchToFiftyFourInch>(this.forty_inch_to_fiftyFour_inch_url);
    //.pipe(catchError(this.handleError('getFortyInchToFiftyFourInch')));
  }
  getFiftyFiveInchAndAbove():Observable<FiftyFiveInchAndAbove>
  {
    return this.http.get<FiftyFiveInchAndAbove>(this.fiftyFive_inch_and_above_url);
    //.pipe(catchError(this.handleError('getFiftyFiveInchAndAbove')));
  }
  getLatestTVs():Observable<LatestTvs>
  {
    return this.http.get<LatestTvs>(this.latest_tvs_url);
    //.pipe(catchError(this.handleError('getLatestTVs')));
  }
  getMostPopularTVs():Observable<MostPopularTvs>
  {
    return this.http.get<MostPopularTvs>(this.most_popular_tvs_url);
    //.pipe(catchError(this.handleError('getMostPopularTVs')));
  }

  getLessThanTwentyK():Observable<LessThanTwentyK>
  {
    return this.http.get<LessThanTwentyK>(this.lessThan_twentyK_url);
    //.pipe(catchError(this.handleError('getLessThanTwentyK')));
  }
  getTwentyKToFortyK():Observable<TwentyKToFortyK>
  {
    return this.http.get<TwentyKToFortyK>(this.twentyK_to_FortyK_url);
    //.pipe(catchError(this.handleError('getTwentyKToFortyK')));
  }
  getFortyKToSeventyK():Observable<FortyKToSeventyK>
  {
    return this.http.get<FortyKToSeventyK>(this.fortyK_to_seventyK_url);
    //.pipe(catchError(this.handleError('getFortyKToSeventyK')));
  }
  getAboveSeventyK():Observable<AboveSeventyK>
  {
    return this.http.get<AboveSeventyK>(this.above_seventyK_url);
    //.pipe(catchError(this.handleError('getAboveSeventyK')));
  }

  /*private handleError<T>(operation = 'operation', result?:T)
  {
    console.log("get all mobiles failure");
  }*/
}
