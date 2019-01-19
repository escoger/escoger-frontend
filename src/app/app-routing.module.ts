import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent }   from './component/mobile/mobile.component';
import { MainFrameComponent }  from './component/main-frame/main-frame.component';
import {MenuContentComponent} from './component/menu-content/menu-content.component';

import { AllMobilesComponent } from './component/Mobiles/all-mobiles/all-mobiles.component';
import { NokiaMobilesComponent } from './component/Mobiles//Brands/nokia-mobiles/nokia-mobiles.component';
import { SamsungMobilesComponent } from './component/Mobiles//Brands/samsung-mobiles/samsung-mobiles.component';
import { AppleMobilesComponent } from './component/Mobiles//Brands/apple-mobiles/apple-mobiles.component';
import { MiMobilesComponent } from './component/Mobiles//Brands/mi-mobiles/mi-mobiles.component';
import { OneplusMobilesComponent } from './component/Mobiles//Brands/oneplus-mobiles/oneplus-mobiles.component';
import { SmartphonesComponent } from './component/Mobiles/Categories/smartphones/smartphones.component';
import { AndroidPhonesComponent } from './component/Mobiles/Categories/android-phones/android-phones.component';
import { FourGMobilesComponent } from './component/Mobiles/Categories/four-g-mobiles/four-g-mobiles.component';
import { ThreeGMobilesComponent } from './component/Mobiles/Categories/three-g-mobiles/three-g-mobiles.component';
import { DualSimMobilesComponent } from './component/Mobiles/Categories/dual-sim-mobiles/dual-sim-mobiles.component';
import { SelfiePhonesComponent } from './component/Mobiles/Categories/selfie-phones/selfie-phones.component';
import { LatestMobilesComponent } from './component/Mobiles/Categories/latest-mobiles/latest-mobiles.component';
import { MostPopularMobilesComponent } from './component/Mobiles/Categories/most-popular-mobiles/most-popular-mobiles.component';
import {LessThanFiveKComponent} from './component/Mobiles/Prices/less-than-five-k/less-than-five-k.component';
import {FiveKToTenKComponent} from './component/Mobiles/Prices/five-k-to-ten-k/five-k-to-ten-k.component';
import {TenKToFifteenKComponent} from './component/Mobiles/Prices/ten-k-to-fifteen-k/ten-k-to-fifteen-k.component';
import {FifteenKToTwentyKComponent} from './component/Mobiles/Prices/fifteen-k-to-twenty-k/fifteen-k-to-twenty-k.component';
import {AboveTwentyKComponent} from './component/Mobiles/Prices/above-twenty-k/above-twenty-k.component';

import { AllLaptopsComponent } from './component/Laptops/all-laptops/all-laptops.component';
import {AppleLaptopsComponent} from './component/Laptops/Brands/apple-laptops/apple-laptops.component';
import { SamsungLaptopsComponent } from './component/Laptops/Brands/samsung-laptops/samsung-laptops.component';
import { SonyLaptopsComponent } from './component/Laptops/Brands/sony-laptops/sony-laptops.component';
import { DellLaptopsComponent } from './component/Laptops/Brands/dell-laptops/dell-laptops.component';
import { ToshibaLaptopsComponent } from './component/Laptops/Brands/toshiba-laptops/toshiba-laptops.component';
import { HpLaptopsComponent } from './component/Laptops/Brands/hp-laptops/hp-laptops.component';
import { WindowsEightComponent } from './component/Laptops/Categories/windows-eight/windows-eight.component';
import { WindowsTenComponent } from './component/Laptops/Categories/windows-ten/windows-ten.component';
import { IntelCoreISevenComponent } from './component/Laptops/Categories/intel-core-i-seven/intel-core-i-seven.component';
import { IntelCoreIFiveComponent } from './component/Laptops/Categories/intel-core-i-five/intel-core-i-five.component';
import { IntelCoreIThreeComponent } from './component/Laptops/Categories/intel-core-i-three/intel-core-i-three.component';
import { LaptopsWithBacklitKeyboardComponent } from './component/Laptops/Categories/laptops-with-backlit-keyboard/laptops-with-backlit-keyboard.component';
import { TouchscreenLaptopsComponent } from './component/Laptops/Categories/touchscreen-laptops/touchscreen-laptops.component';
import { LatestLaptopsComponent } from './component/Laptops/Categories/latest-laptops/latest-laptops.component';
import { MostPopularLaptopsComponent } from './component/Laptops/Categories/most-popular-laptops/most-popular-laptops.component';
import { GamingLaptopsComponent } from './component/Laptops/Categories/gaming-laptops/gaming-laptops.component';

import { AllTvsComponent } from './component/TVs/all-tvs/all-tvs.component';
import { LessThanTwentyKComponent } from './component/Laptops/Prices/less-than-twenty-k/less-than-twenty-k.component';
import { TwentyKToThirtyKComponent } from './component/Laptops/Prices/twenty-k-to-thirty-k/twenty-k-to-thirty-k.component';
import { ThirtyKToFortyK } from './model/Laptops/Prices/thirty-k-to-forty-k';
import { ThirtyKToFortyKComponent } from './component/Laptops/Prices/thirty-k-to-forty-k/thirty-k-to-forty-k.component';
import { FortyKToFiftyK } from './model/Laptops/Prices/forty-k-to-fifty-k';
import { FortyKToFiftyKComponent } from './component/Laptops/Prices/forty-k-to-fifty-k/forty-k-to-fifty-k.component';
import { FiftyKToSixtyKComponent } from './component/Laptops/Prices/fifty-k-to-sixty-k/fifty-k-to-sixty-k.component';
import { AboveSixtyKComponent } from './component/Laptops/Prices/above-sixty-k/above-sixty-k.component';
import { SonyTvsComponent } from './component/TVs/Brands/sony-tvs/sony-tvs.component';
import { SamsungTvsComponent } from './component/TVs/Brands/samsung-tvs/samsung-tvs.component';
import { MiTvsComponent } from './component/TVs/Brands/mi-tvs/mi-tvs.component';
import { PanasonicTvsComponent } from './component/TVs/Brands/panasonic-tvs/panasonic-tvs.component';
import { LgTvsComponent } from './component/TVs/Brands/lg-tvs/lg-tvs.component';
import { MicromaxTvsComponent } from './component/TVs/Brands/micromax-tvs/micromax-tvs.component';
import { SmartTvsComponent } from './component/TVs/Categories/smart-tvs/smart-tvs.component';
import { CurvedTvsComponent } from './component/TVs/Categories/curved-tvs/curved-tvs.component';
import { ThreeDTvsComponent } from './component/TVs/Categories/three-d-tvs/three-d-tvs.component';
import { FullHdResolutionComponent } from './component/TVs/Categories/full-hd-resolution/full-hd-resolution.component';
import { UptoTwentyThreeInchComponent } from './component/TVs/Categories/upto-twenty-three-inch/upto-twenty-three-inch.component';
import { TwentyFourInchToThirtyNineInchComponent } from './component/TVs/Categories/twenty-four-inch-to-thirty-nine-inch/twenty-four-inch-to-thirty-nine-inch.component';
import { FortyInchToFiftyFourInchComponent } from './component/TVs/Categories/forty-inch-to-fifty-four-inch/forty-inch-to-fifty-four-inch.component';
import { FiftyFiveInchAndAboveComponent } from './component/TVs/Categories/fifty-five-inch-and-above/fifty-five-inch-and-above.component';
import { LatestTvsComponent } from './component/TVs/Categories/latest-tvs/latest-tvs.component';
import { MostPopularTvsComponent } from './component/TVs/Categories/most-popular-tvs/most-popular-tvs.component';
import { TwentyKToFortyKComponent } from './component/TVs/Prices/twenty-k-to-forty-k/twenty-k-to-forty-k.component';
import { FortyKToSeventyKComponent } from './component/TVs/Prices/forty-k-to-seventy-k/forty-k-to-seventy-k.component';
import { AboveSeventyKComponent } from './component/TVs/Prices/above-seventy-k/above-seventy-k.component';
import { MotorolaMobilesComponent } from './component/Mobiles/Brands/motorola-mobiles/motorola-mobiles.component';
import { VivoMobilesComponent } from './component/Mobiles/Brands/vivo-mobiles/vivo-mobiles.component';
import { HonorMobilesComponent } from './component/Mobiles/Brands/honor-mobiles/honor-mobiles.component';
import { LenovoLaptopsComponent } from './component/Laptops/Brands/lenovo-laptops/lenovo-laptops.component';
import { AcerLaptopsComponent } from './component/Laptops/Brands/acer-laptops/acer-laptops.component';
import { AsusLaptopsComponent } from './component/Laptops/Brands/asus-laptops/asus-laptops.component';
import { MicrosoftLaptopsComponent } from './component/Laptops/Brands/microsoft-laptops/microsoft-laptops.component';
import { OnidaTvsComponent } from './component/TVs/Brands/onida-tvs/onida-tvs.component';
import { VideoconTvsComponent } from './component/TVs/Brands/videocon-tvs/videocon-tvs.component';
import { SansuiTvsComponent } from './component/TVs/Brands/sansui-tvs/sansui-tvs.component';
import { PhilipsTvsComponent } from './component/TVs/Brands/philips-tvs/philips-tvs.component'
const routes: Routes = [
  { path: 'mobiles', component: MobileComponent },
  { path : '', component: MainFrameComponent},
  {
    path : 'menucontent',
    component : MenuContentComponent,
    children : [
      {
        path : 'all-mobiles',
        component : AllMobilesComponent 
      },
      {
        path : 'nokia-mobiles',
        component : NokiaMobilesComponent
      },
      {
        path : 'samsung-mobiles',
        component : SamsungMobilesComponent
      },
      {
        path : 'apple-mobiles',
        component : AppleMobilesComponent
      },
      {
        path : 'mi-mobiles',
        component : MiMobilesComponent
      },
      {
        path : 'oneplus-mobiles',
        component : OneplusMobilesComponent
      },
      {
        path : 'motorola-mobiles',
        component : MotorolaMobilesComponent
      },
      {
        path : 'vivo-mobiles',
        component : VivoMobilesComponent
      },
      {
        path : 'honor-mobiles',
        component : HonorMobilesComponent
      },
      {
        path : 'smart-phones',
        component : SmartphonesComponent
      },
      {
        path : 'android-phones',
        component : AndroidPhonesComponent
      },
      {
        path : '4G-mobiles',
        component : FourGMobilesComponent
      },
      {
        path : '3G-mobiles',
        component : ThreeGMobilesComponent
      },
      {
        path : 'dual-sim-mobiles',
        component : DualSimMobilesComponent
      },
      {
        path : 'selfie-phones',
        component : SelfiePhonesComponent
      },
      {
        path : 'latest-mobiles',
        component : LatestMobilesComponent
      },
      {
        path : 'most-popular-mobiles',
        component : MostPopularMobilesComponent
      },
      {
        path : 'mobiles-less_than_5k',
        component : LessThanFiveKComponent
      },
      {
        path : 'mobiles-5k_to_10k',
        component : FiveKToTenKComponent
      },
      {
        path : 'mobiles-10k_to_15k',
        component : TenKToFifteenKComponent
      },
      {
        path : 'mobiles-15k_to_20k',
        component : FifteenKToTwentyKComponent
      },
      {
        path : 'mobiles-above_20k',
        component : AboveTwentyKComponent
      },
      {
        path : 'all-laptops',
        component : AllLaptopsComponent
      },
      {
        path : 'apple-laptops',
        component : AppleLaptopsComponent
      },
      {
        path : 'samsung-laptops',
        component : SamsungLaptopsComponent
      },
      {
        path : 'sony-laptops',
        component : SonyLaptopsComponent
      },
      {
        path : 'dell-laptops',
        component : DellLaptopsComponent
      },
      {
        path : 'toshiba-laptops',
        component : ToshibaLaptopsComponent
      },
      {
        path : 'hp-laptops',
        component : HpLaptopsComponent
      },
      {
        path : 'lenovo-laptops',
        component : LenovoLaptopsComponent
      },
      {
        path : 'acer-laptops',
        component : AcerLaptopsComponent
      },
      {
        path : 'asus-laptops',
        component : AsusLaptopsComponent
      },
      {
        path : 'microsoft-laptops',
        component : MicrosoftLaptopsComponent
      },
      {
        path : 'windows-8-laptops',
        component : WindowsEightComponent
      },
      {
        path : 'windows-10-laptops',
        component : WindowsTenComponent
      },
      {
        path : 'gaming-laptops',
        component : GamingLaptopsComponent
      },
      {
        path : 'intel-core-i7-laptops',
        component : IntelCoreISevenComponent
      },
      {
        path : 'intel-core-i5-laptops',
        component : IntelCoreIFiveComponent
      },
      {
        path : 'intel-core-i3-laptops',
        component : IntelCoreIThreeComponent
      },
      {
        path : 'laptops-with-backlit-keyboard',
        component : LaptopsWithBacklitKeyboardComponent
      },
      {
        path : 'touch-screen-laptops',
        component : TouchscreenLaptopsComponent
      },
      {
        path : 'latest-laptops',
        component : LatestLaptopsComponent
      },
      {
        path : 'most-popular-laptops',
        component : MostPopularLaptopsComponent
      },
      {
        path : 'laptops-less_than_20k',
        component : LessThanTwentyKComponent
      },
      {
        path : 'laptops-20k_to_30k',
        component : TwentyKToThirtyKComponent
      },
      {
        path : 'laptops-30k_to_40k',
        component : ThirtyKToFortyKComponent
      },
      {
        path : 'laptops-40k_to_50k',
        component : FortyKToFiftyKComponent
      },
      {
        path : 'laptops-50k_to_60k',
        component : FiftyKToSixtyKComponent
      },
      {
        path : 'laptops-above_60k',
        component : AboveSixtyKComponent
      },
      {
        path : 'all-televisions',
        component : AllTvsComponent
      },
      {
        path : 'sony-televisions',
        component : SonyTvsComponent
      },
      {
        path : 'samsung-televisions',
        component : SamsungTvsComponent
      },
      {
        path : 'mi-televisions',
        component : MiTvsComponent
      },
      {
        path : 'panasonic-televisions',
        component : PanasonicTvsComponent
      },
      {
        path : 'lg-televisions',
        component : LgTvsComponent
      },
      {
        path : 'micromax-televisions',
        component : MicromaxTvsComponent
      },
      {
        path : 'onida-televisions',
        component : OnidaTvsComponent
      },
      {
        path : 'videocon-televisions',
        component : VideoconTvsComponent
      },
      {
        path : 'sansui-televisions',
        component : SansuiTvsComponent
      },
      {
        path : 'philips-televisions',
        component : PhilipsTvsComponent
      },
      {
        path : 'smart-televisions',
        component : SmartTvsComponent
      },
      {
        path : 'curved-televisions',
        component : CurvedTvsComponent
      },
      {
        path : '3D-televisions',
        component : ThreeDTvsComponent
      },
      {
        path : 'full-hd-televisions',
        component : FullHdResolutionComponent
      },
      {
        path : 'upto-23inch-televisions',
        component : UptoTwentyThreeInchComponent
      },
      {
        path : '24inch-to-39inch-televisions',
        component : TwentyFourInchToThirtyNineInchComponent
      },
      {
        path : '40inch-to-54inch-televisions',
        component : FortyInchToFiftyFourInchComponent
      },
      {
        path : 'above-55inch-televisions',
        component : FiftyFiveInchAndAboveComponent
      },
      {
        path : 'latest-televisions',
        component : LatestTvsComponent
      },
      {
        path : 'most-popular-televisions',
        component : MostPopularTvsComponent
      },
      {
        path : 'televisions-less_than_20k',
        component : LessThanTwentyKComponent
      },
      {
        path : 'televisions-20k_to_40k',
        component : TwentyKToFortyKComponent
      },
      {
        path : 'televisions-40k_to_70k',
        component : FortyKToSeventyKComponent
      },
      {
        path : 'televisions-above_70k',
        component : AboveSeventyKComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
